const Migrations = artifacts.require("Migrations");
const Factory = artifacts.require("DGMWSwapFactory");


module.exports = async function (deployer) {
    await deployer.deploy(Migrations);
    await deployer.deploy(Factory);
};
