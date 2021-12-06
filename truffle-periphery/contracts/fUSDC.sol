// SPDX-License-Identifier: GPL-3.0

pragma solidity =0.6.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract fUSDC is ERC20{

    address public owner;
    mapping(address => uint) public balances;

    constructor(uint256 initialSupply) ERC20("fUSDC", "fUSDC") public {
        owner = msg.sender;
        _mint(msg.sender, initialSupply);
    }
}
