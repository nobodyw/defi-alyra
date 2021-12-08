const DGMWToken = artifacts.require("DGMWToken");
const masterchef = artifacts.require("MasterChef");
const { ethers } = require("ethers");
const {BN} = require("@openzeppelin/test-helpers");
const Web3 = require("web3");
const factory = artifacts.require("DGMWSwapFactory");
const DGMWStacking = artifacts.require("DGMWStacking");
const fUSDC = artifacts.require("fUSDC");
const Pair = artifacts.require("DGMWSwapPair");



module.exports = async function (deployer, network, addresses) {
    await deployer.deploy(DGMWToken,new BN(Web3.utils.toWei('1000000000')));
    const DGMWTokenInstance = await DGMWToken.deployed();
    console.log('deploy DGMWToken')
    const currentBlock = await web3.eth.getBlockNumber();
    await deployer.deploy(masterchef,
        DGMWToken.address,
        addresses[0],
        ethers.utils.parseEther("10"),
        currentBlock,
        currentBlock + 100
    );
    const masterchefInstance = await masterchef.deployed();
    await DGMWTokenInstance.setAdmin(masterchefInstance.address);
    const balance = await DGMWTokenInstance.balanceOf(addresses[0]);
    console.log(Web3.utils.fromWei(balance,'ether') + 'DGMWToken Disponibles');


    console.log('deploy MasterChef')
    const Instance = await factory.deployed();
    const fUSDCWeth = await Instance.allPairs(0);
    const fUSDTWeth = await Instance.allPairs(1);
    const fDAIWeth = await Instance.allPairs(2);
    await masterchefInstance.add(30,fUSDCWeth,true);
    await masterchefInstance.add(20,fUSDTWeth,true);
    await masterchefInstance.add(50,fDAIWeth,true);
    console.log('add rewards 30% fUSDCWeth | 20% fUSDTWeth | 50% fDAIWeth');
};
