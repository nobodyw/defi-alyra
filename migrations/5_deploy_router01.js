var Router01 = artifacts.require("./MWSwapRouter01.sol");

module.exports = async function(deployer) {
    await deployer.deploy(Router01,'0x1fF6E8Da079D384BE17B33000e2f88312cb639a4', '0xd2eaEB0bC274e2c978F83cc66329DeF57b47E5BE');
};