const DGMWToken = artifacts.require("DGMWToken");
const masterchef = artifacts.require("MasterChef");
const { ethers } = require("ethers");
const {BN} = require("@openzeppelin/test-helpers");
const Web3 = require("web3");
const factory = artifacts.require("DGMWSwapFactory");

module.exports = async function (deployer, network, addresses) {
    const Token = await deployer.deploy(DGMWToken,new BN(Web3.utils.toWei('1000000000')));
    console.log('deploy DGMWToken')
    const currentBlock = await web3.eth.getBlockNumber();
    const masterchefInstance = await deployer.deploy(masterchef,
        DGMWToken.address,
        addresses[0],
        ethers.utils.parseEther("10"),
        currentBlock,
        currentBlock + 100
    );
    console.log('deploy MasterChef')
    const Instance = await factory.deployed();
    const fUSDCWeth = await Instance.allPairs(0);
    const fUSDTWeth = await Instance.allPairs(1);
    const fDAIWeth = await Instance.allPairs(2);
    masterchefInstance.add(30,fUSDCWeth,true);
    masterchefInstance.add(20,fUSDTWeth,true);
    masterchefInstance.add(50,fDAIWeth,true);
    console.log('add rewards 30% fUSDCWeth | 20% fUSDTWeth | 50% fDAIWeth');
};
