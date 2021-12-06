const Factory = artifacts.require("DGMWSwapFactory");
const Pair = artifacts.require("DGMWSwapPair");
const V2ERC20 = artifacts.require("UniswapV2ERC20");


module.exports = async function (deployer, network, addresses) {
    await deployer.deploy(Factory,addresses[0]);
    await deployer.deploy(Pair);
    await deployer.deploy(V2ERC20);
};
