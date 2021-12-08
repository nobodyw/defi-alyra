// SPDX-License-Identifier: GPL-3.0

pragma solidity =0.6.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DGMWToken is ERC20, Ownable {

    constructor(uint256 initialSupply) ERC20("DGMWTOKEN", "DGMW") public {
        _mint(msg.sender, initialSupply);
    }

    mapping(address => bool) public admin;

    modifier onlyAdmin() {
        require(owner() == msg.sender || admin[msg.sender]);
        _;
    }

    function mint(address _to, uint256 _amount) public onlyAdmin {
        _mint(_to, _amount);
    }

    function setAdmin(address _newAdmin) public onlyOwner {
        require (admin[_newAdmin] == false);
        admin[_newAdmin] = true;
    }

    function removeAdmin(address _newAdmin) public onlyOwner {
        require (admin[_newAdmin] == true);
        admin[_newAdmin] = false;
    }
}