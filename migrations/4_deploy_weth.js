var Weth = artifacts.require("./Weth.sol");

module.exports = async function(deployer) {
    await deployer.deploy(Weth);
};