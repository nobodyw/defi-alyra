var Pair = artifacts.require("./MWSwapPair.sol");

module.exports = async function(deployer) {
    await deployer.deploy(Pair);
};