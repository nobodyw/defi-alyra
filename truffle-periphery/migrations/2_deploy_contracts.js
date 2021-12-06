const Weth = artifacts.require("Weth");
const Router01 = artifacts.require("DGMWSwapRouter01");
const Router02 = artifacts.require("DGMWSwapRouter02");
const Migrator = artifacts.require("UniswapV2Migrator");


module.exports = async function (deployer) {
    await deployer.deploy(Weth);
    await deployer.deploy(Router01,'0x51DeF0cf1430a3065D57890fA4690E6AE5ca0086',Weth.address);
    await deployer.deploy(Router02,'0x51DeF0cf1430a3065D57890fA4690E6AE5ca0086',Weth.address);
    await deployer.deploy(Migrator,'0x51DeF0cf1430a3065D57890fA4690E6AE5ca0086',Router02.address);
};
