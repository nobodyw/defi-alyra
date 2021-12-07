const Weth = artifacts.require("Weth");
const fUSDC = artifacts.require("fUSDC");
const fUSDT = artifacts.require("fUSDT");
const fDAI = artifacts.require("fDai");
const Router01 = artifacts.require("DGMWSwapRouter01");
const Router02 = artifacts.require("DGMWSwapRouter02");
const Migrator = artifacts.require("UniswapV2Migrator");
const Factory = artifacts.require("DGMWSwapFactory");
const library = artifacts.require("UniswapV2Library");
const Web3 = require('web3');
const {
    BN,           // Big Number support
    constants,    // Common constants, like the zero address and largest integers
    expectEvent,  // Assertions for emitted events
    expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');


module.exports = async function (deployer, network, addresses) {
    const WethInstance = await deployer.deploy(Weth);
    const fUSDCInstance = await deployer.deploy(fUSDC,new BN(Web3.utils.toWei('1000000000')),{from:addresses[0]});
    const fUSDTInstance = await deployer.deploy(fUSDT,new BN(Web3.utils.toWei('1000000000')),{from:addresses[0]});
    const fDAIInstance = await deployer.deploy(fDAI,new BN(Web3.utils.toWei('1000000000')),{from:addresses[0]});
    await deployer.deploy(Factory,addresses[0]);
    await deployer.deploy(Router01,Factory.address,Weth.address);
    const Router02Instance = await deployer.deploy(Router02,Factory.address,Weth.address);
    await deployer.deploy(Migrator,'0x611F8f917b921073BD46bF42018d9506513213eF',Router02.address);
    await deployer.deploy(library);

    // CREATION DES PAIRS FUSDC FUSDT FDAI
    const Instance = await Factory.deployed();
    const PairfUSDC = await Instance.createPair(fUSDC.address,Weth.address);
    const PairfUSDT = await Instance.createPair(fUSDT.address, Weth.address);
    const PairfDai = await Instance.createPair(fDAI.address, Weth.address);
    console.log('creation des pairs FUSDC/WETH FUSDT/WETH FDAI/WETH');
    //APPROVE LIQUIDITY PAIRS
    const approveFUSDC = await fUSDCInstance.approve(Router02.address,new BN(Web3.utils.toWei('100000')));
    const approveFUSDT = await fUSDTInstance.approve(Router02.address,new BN(Web3.utils.toWei('100000')));
    const approveFDAI = await fDAIInstance.approve(Router02.address,new BN(Web3.utils.toWei('100000')));
    console.log('approuve liquidity FUSDC -> 100000 | FUSDT -> 100000 | FDAI -> 100000');
    //ADD LIQUIDITY ETH
    const addLiquidityFUSDC = await Router02Instance.addLiquidityETH(fUSDCInstance.address,new BN(Web3.utils.toWei('100000')),0,0,addresses[0],'1638813535144',{value: new BN(Web3.utils.toWei('1'))});
    const addLiquidityFUSDT = await Router02Instance.addLiquidityETH(fUSDTInstance.address,new BN(Web3.utils.toWei('10000')),0,0,addresses[0],'1638813535144',{value: new BN(Web3.utils.toWei('1'))});
    const addLiquidityFDAI = await Router02Instance.addLiquidityETH(fDAIInstance.address,new BN(Web3.utils.toWei('10000')),0,0,addresses[0],'1638813535144',{value: new BN(Web3.utils.toWei('1'))});
    // const swapToken = await Router02Instance.swapTokensForExactETH(1000, 100000,[fUSDCInstance.address,Weth.address],addresses[0],'1638813535144');
    console.log('add liquidité FUSDC(100000)/WETH(5) | FUSDT(100000)/WETH(5) | FDAI(100000)/WETH(5)');

    // console.log(addLiquidityFUSDC);
    // console.log(addLiquidityFUSDT);
    // console.log(addLiquidityFDAI);


};
