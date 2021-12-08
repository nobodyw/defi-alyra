CONTRIBUTORS

https://github.com/nobodyw (Michael W.)

https://github.com/Damwazo (Damien G.)

-------------------------------
Installation 

Modifier le truffle-cli: port

  ./truffle-core

truffle deploy

  ./truffle-periphery

npm install

truffle deploy

-------------------------------
Fonctionnalitées:
(Fork Uniswap)
- FORK FACTORY, FORK SWAPPAIR, SWAPROUTER, fUSDC, fUSDT et fDAI
- creation des pairs FUSDC/WETH FUSDT/WETH FDAI/WETH
- Ajout de liquidité dans les 3 pairs
- Effectuer un swap via le router (fUSDC/Weth)

(FORK Masterchef SushiSwap)
- Création d’un ERC20 mintable (DGMWToken)
- FORK MASTERCHEF
- REWARDS USDC/WETH (30%), fUSDT/WETH (20%) et fDAI/WETH (50%)

-------------------------------
Test:

truffle test
execute le swap fUSDC/WETH
