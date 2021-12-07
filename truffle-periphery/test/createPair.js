const factory = artifacts.require("DGMWSwapFactory");
const Weth = artifacts.require("Weth");
const fUSDC = artifacts.require("fUSDC");
const fUSDT = artifacts.require("fUSDT");
const fDai = artifacts.require("fDai");
const Router01 = artifacts.require("DGMWSwapRouter01");
const Router02 = artifacts.require("DGMWSwapRouter02");
const ERC20 = artifacts.require("UniswapV2ERC20");
const Web3 = require('web3');
const {
    BN,           // Big Number support
    constants,    // Common constants, like the zero address and largest integers
    expectEvent,  // Assertions for emitted events
    expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');
const {web3} = require("@openzeppelin/test-helpers/src/setup");



contract("Test", accounts => {
    it("CreatePair", async () => {
        const Instance = await factory.deployed();
    //     // const PairfUSDC = await Instance.createPair(fUSDC.address,Weth.address);
    //     // const PairfUSDT = await Instance.createPair(fUSDT.address, Weth.address);
    //     // const PairfDai = await Instance.createPair(fDai.address, Weth.address);
    //     const getfUSDC = await Instance.allPairs(0);
    //     const getfUSDT = await Instance.allPairs(1);
    //     const getfDAI = await Instance.allPairs(2);
    //     console.log(getfUSDC,getfUSDT,getfDAI);
    });

    it("Swap FUSDC/WETH", async () => {
        const RouterInstance = await Router02.deployed();
        const WethInstance = await Weth.deployed();
        const fUSDCInstance = await fUSDC.deployed();
        const fUSDTInstance = await fUSDT.deployed();
        const fDAIInstance = await fDai.deployed();

        // const approveFUSDC = await fUSDCInstance.approve(RouterInstance.address,1000000);
        const swapToken = await RouterInstance.swapExactETHForTokens
        (0,[WethInstance.address,fUSDCInstance.address],accounts[0],'1638813535144',{value: new BN(Web3.utils.toWei('1'))});
        const balanceOfFUSDC = await fUSDCInstance.balanceOf(accounts[0]);
        console.log(Web3.utils.fromWei(balanceOfFUSDC,'ether')+ ' FUSDC Disponibles');
        // const balanceOfUSDT = await fUSDTInstance.balanceOf(accounts[0]);
        // const balanceWeth = await WethInstance.balanceOf(accounts[0]);
        // const balanceRouterWeth = await WethInstance.balanceOf(RouterInstance.address);
        // console.log(Web3)
        // console.log(web3.eth.getBalance(accounts[0]));

        // console.log(Web3.utils.fromWei(balanceOfUSDT,'gwei'));
        // console.log(Web3.utils.fromWei(balanceWeth,'gwei'));
        // console.log(Web3.utils.fromWei(balanceRouterWeth,'gwei'));
        // console.log(balanceOf.toNumber(),balanceOfUSDT.toNumber());
        // const approveFUSDT = await fUSDTInstance.approve(RouterInstance.address,10000);
        // const approveFDAI = await fDAIInstance.approve(RouterInstance.address,10000);
        // const addLiquidityUSDC = await RouterInstance.addLiquidityETH(fUSDCInstance.address,10000,0,0,accounts[0],'1638813535144',{value: 10000});
        // const addLiquidityUSDT = await RouterInstance.addLiquidityETH(fUSDTInstance.address,10000,0,0,accounts[0],'1638813535144',{value: 10000});
        // const addLiquidityDAI = await RouterInstance.addLiquidityETH(fDAIInstance.address,10000,0,0,accounts[0],'1638813535144',{value: 10000});
        // console.log(approveFUSDC);
        // console.log(approveFUSDT);
        // console.log(approveFDAI);
        // console.log(addLiquidityUSDC);
        // console.log(addLiquidityUSDT);
        // console.log(addLiquidityDAI);
    });
});
