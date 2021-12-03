var Factory = artifacts.require("./MWSwapFactory.sol");

module.exports = async function(deployer, network, addresses) {
  await deployer.deploy(Factory,addresses[0]);
};
