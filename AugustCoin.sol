// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract AugustsProfiles {

    address public owner;
    address[] private usersAddy;
    string[] private usersName;

    constructor(address ownerAddress) {
        owner = ownerAddress;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    
    function addUser(address theUser, string memory username) public {
        require(theUser != address(0), "Must add address");
        require(bytes(username).length > 0, "Must add username");
        require(findUserIndex(theUser) == int(-1),"Address is already registered");
        require(findStringIndex(username) == int(-1),"Username is already registered");

        usersAddy.push(theUser);
        usersName.push(username);

    }

    function forceAddUserPublic(address theUser, string memory username) public onlyOwner {
        usersAddy.push(theUser);
        usersName.push(username);
    }

    function forceRemoveUserPublic(uint32 index) public onlyOwner {
        delete usersAddy[index];
        delete usersName[index];
    }

    function findUserIndex(address theUser) public view returns (int) {
        for (uint i = 0; i < usersAddy.length; i++) {
            if (usersAddy[i] == theUser) {
                return int(i); 
            }
        }
        return int(-1); 
    }

    function findStringIndex(string memory username) public view returns (int) {
        for (uint i = 0; i < usersName.length; i++) {
            if (keccak256(bytes(usersName[i])) == keccak256(bytes(username))) {
                return int(i); 
            }
        }
        return int(-1); 
    }

    function getProfile(uint32 index) public view returns (address, string memory) {
        require(index < usersAddy.length, "Index out of bounds");
        return (usersAddy[index], usersName[index]);
    }

    function getAllProfiles() public view returns (address[] memory, string[] memory) {
        return (usersAddy, usersName);
    }

}

interface IAugustsProfiles {
    function addUser(address theUser, string memory username) external;
    function findUserIndex(address theUser) external view returns (int);
    function findStringIndex(string memory username) external view returns (int);
    function getProfile(uint32 index) external view returns (address, string memory);
    function getAllProfiles() external view returns (address[] memory, string[] memory);
}

contract AugustCoin is ERC20, ERC20Burnable, Ownable, ERC20Permit {
    IAugustsProfiles public profiles;
    uint256 private immutable _cap = 1000000000*10**18;
    error ERC20ExceededCap(uint256 increasedSupply, uint256 cap);

    constructor(address initialOwner, address profilesAddress) ERC20("AugustCoin", "ACN") Ownable(initialOwner) ERC20Permit("AugustCoin") {
        profiles = IAugustsProfiles(profilesAddress);
        _update(address(0),initialOwner, 600000000*10**18);
        

    }

    function cap() public view virtual returns (uint256) {
        return _cap;
    }

    function _update(address from, address to, uint256 value) internal virtual override {
        require(profiles.findUserIndex(to) != int(-1),"User must register! Use the addProfile function");
        
        super._update(from, to, value);

        if (from == address(0)) {
            uint256 maxSupply = cap();
            uint256 supply = totalSupply();
            if (supply > maxSupply) {
                revert ERC20ExceededCap(supply, maxSupply);
            }
        }


    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
    function burn(address to, uint256 amount) public onlyOwner {
        _burn(to, amount);
    }

    function addProfile(address theUser, string memory username) public {
        profiles.addUser(theUser,username);
    }

}



interface Iaugust {
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 value) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 value) external returns (bool);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
    function _mint(address account, uint256 value) external;
}



contract AugustFaucet {
    Iaugust public token;

    uint256 public withdrawalAmount = 50 * (10**18);
    uint256 public lockTime = 86400;
    address payable owner;

    event Withdrawal(address indexed to, uint256 indexed amount);
    event Deposit(address indexed from, uint256 indexed amount);

    mapping(address => uint256) nextAccessTime;

    constructor(address tokenAddress, address ownerAddress) payable {
        token = Iaugust(tokenAddress);
        owner = payable(ownerAddress);
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function requestTokens() public {
        require(
            msg.sender != address(0),
            "Request must not originate from a zero account"
        );
        require(
            token.balanceOf(address(this)) >= withdrawalAmount,
            "Insufficient balance in faucet for withdrawal request"
        );
        require(
            block.timestamp >= nextAccessTime[msg.sender],
            "Insufficient time elapsed since last withdrawal - try again later."
        );

        nextAccessTime[msg.sender] = block.timestamp + lockTime;
        token.transfer(msg.sender, withdrawalAmount);
    }

    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    function getBalance() external view returns (uint256) {
        return token.balanceOf(address(this));
    }

    function setWithdrawalAmount(uint256 amount) public onlyOwner {
        withdrawalAmount = amount * (10**18);
    }

    function setLockTime(uint256 amount) public onlyOwner {
        lockTime = amount;
    }

    function withdraw() external onlyOwner {
        emit Withdrawal(msg.sender, token.balanceOf(address(this)));
        token.transfer(msg.sender, token.balanceOf(address(this)));
    }

}
