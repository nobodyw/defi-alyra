const Weth = artifacts.require("Weth");
const fUSDC = artifacts.require("fUSDC");
const Router01 = artifacts.require("DGMWSwapRouter01");
const Router02 = artifacts.require("DGMWSwapRouter02");
const Migrator = artifacts.require("UniswapV2Migrator");
// const Factory = artifacts.require('../../truffle-core/contracts/DGMWSwapFactory');
const Factory = artifacts.require("truffle-core/build/contracts/DGMWSwapFactory");
module.exports = async function (deployer) {
    await deployer.deploy(Weth);
    await deployer.deploy(Factory);
    await deployer.deploy(Router01,'0x51DeF0cf1430a3065D57890fA4690E6AE5ca0086',Weth.address);
    await deployer.deploy(Router02,'0x51DeF0cf1430a3065D57890fA4690E6AE5ca0086',Weth.address);
    await deployer.deploy(Migrator,Factory,Router02.address);
    await deployer.deploy(fUSDC,'1000');
};
