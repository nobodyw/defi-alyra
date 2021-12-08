const factory = artifacts.require("DGMWSwapFactory");
const Weth = artifacts.require("Weth");
const fUSDC = artifacts.require("fUSDC");
const fUSDT = artifacts.require("fUSDT");
const fDai = artifacts.require("fDai");
const Router01 = artifacts.require("DGMWSwapRouter01");
const Router02 = artifacts.require("DGMWSwapRouter02");
const ERC20 = artifacts.require("UniswapV2ERC20");
const DGMWToken = artifacts.require("DGMWToken");
const masterchef = artifacts.require("MasterChef");

const Web3 = require('web3');
const {
    BN,           // Big Number support
    constants,    // Common constants, like the zero address and largest integers
    expectEvent,  // Assertions for emitted events
    expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');
const {web3} = require("@openzeppelin/test-helpers/src/setup");
const {ethers} = require("ethers");



contract("Test", accounts => {
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
        console.log('Swap FUSDC/WETH');
        console.log(Web3.utils.fromWei(balanceOfFUSDC,'ether')+ ' FUSDC Disponibles');
    });
});
