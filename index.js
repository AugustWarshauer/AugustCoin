// import profilesABI from './AugustsProfiles_abi.json' with { type: "json" };
// import coinABI from './AugustCoin_abi.json' with { type: "json" };
// import faucetABI from './AugustFaucet_abi.json' with { type: "json" };

// console.log(faucetABI);
// console.log(coinABI);
// console.log(profilesABI);
let profilesABI = [ { "inputs": [ { "internalType": "address", "name": "ownerAddress", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "theUser", "type": "address" }, { "internalType": "string", "name": "username", "type": "string" } ], "name": "addUser", "outputs": [], "stateMutability": "nonpayable", "type": "function", "signature": "0x4b68d431" }, { "inputs": [ { "internalType": "string", "name": "username", "type": "string" } ], "name": "findStringIndex", "outputs": [ { "internalType": "int256", "name": "", "type": "int256" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0x8884be69" }, { "inputs": [ { "internalType": "address", "name": "theUser", "type": "address" } ], "name": "findUserIndex", "outputs": [ { "internalType": "int256", "name": "", "type": "int256" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0xbb54490c" }, { "inputs": [ { "internalType": "address", "name": "theUser", "type": "address" }, { "internalType": "string", "name": "username", "type": "string" } ], "name": "forceAddUserPublic", "outputs": [], "stateMutability": "nonpayable", "type": "function", "signature": "0xf9dbc2b2" }, { "inputs": [ { "internalType": "uint32", "name": "index", "type": "uint32" } ], "name": "forceRemoveUserPublic", "outputs": [], "stateMutability": "nonpayable", "type": "function", "signature": "0x70dacee5" }, { "inputs": [], "name": "getAllProfiles", "outputs": [ { "internalType": "address[]", "name": "", "type": "address[]" }, { "internalType": "string[]", "name": "", "type": "string[]" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0x0b1fe784" }, { "inputs": [ { "internalType": "uint32", "name": "index", "type": "uint32" } ], "name": "getProfile", "outputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0x84c1b82d" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0x8da5cb5b" } ];
let coinABI = [ { "inputs": [ { "internalType": "address", "name": "initialOwner", "type": "address" }, { "internalType": "address", "name": "profilesAddress", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "ECDSAInvalidSignature", "type": "error" }, { "inputs": [ { "internalType": "uint256", "name": "length", "type": "uint256" } ], "name": "ECDSAInvalidSignatureLength", "type": "error" }, { "inputs": [ { "internalType": "bytes32", "name": "s", "type": "bytes32" } ], "name": "ECDSAInvalidSignatureS", "type": "error" }, { "inputs": [ { "internalType": "uint256", "name": "increasedSupply", "type": "uint256" }, { "internalType": "uint256", "name": "cap", "type": "uint256" } ], "name": "ERC20ExceededCap", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "allowance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" } ], "name": "ERC20InsufficientAllowance", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "uint256", "name": "balance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" } ], "name": "ERC20InsufficientBalance", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "approver", "type": "address" } ], "name": "ERC20InvalidApprover", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "receiver", "type": "address" } ], "name": "ERC20InvalidReceiver", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" } ], "name": "ERC20InvalidSender", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" } ], "name": "ERC20InvalidSpender", "type": "error" }, { "inputs": [ { "internalType": "uint256", "name": "deadline", "type": "uint256" } ], "name": "ERC2612ExpiredSignature", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "signer", "type": "address" }, { "internalType": "address", "name": "owner", "type": "address" } ], "name": "ERC2612InvalidSigner", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "currentNonce", "type": "uint256" } ], "name": "InvalidAccountNonce", "type": "error" }, { "inputs": [], "name": "InvalidShortString", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "OwnableInvalidOwner", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "OwnableUnauthorizedAccount", "type": "error" }, { "inputs": [ { "internalType": "string", "name": "str", "type": "string" } ], "name": "StringTooLong", "type": "error" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event", "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925" }, { "anonymous": false, "inputs": [], "name": "EIP712DomainChanged", "type": "event", "signature": "0x0a6387c9ea3628b88a633bb4f3b151770f70085117a15f9bf3787cda53f13d31" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event", "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event", "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef" }, { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0x3644e515" }, { "inputs": [ { "internalType": "address", "name": "theUser", "type": "address" }, { "internalType": "string", "name": "username", "type": "string" } ], "name": "addProfile", "outputs": [], "stateMutability": "nonpayable", "type": "function", "signature": "0x11df7195" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0xdd62ed3e" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function", "signature": "0x095ea7b3" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0x70a08231" }, { "inputs": [ { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function", "signature": "0x42966c68" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function", "signature": "0x9dc29fac" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function", "signature": "0x79cc6790" }, { "inputs": [], "name": "cap", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0x355274ea" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0x313ce567" }, { "inputs": [], "name": "eip712Domain", "outputs": [ { "internalType": "bytes1", "name": "fields", "type": "bytes1" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "version", "type": "string" }, { "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "internalType": "address", "name": "verifyingContract", "type": "address" }, { "internalType": "bytes32", "name": "salt", "type": "bytes32" }, { "internalType": "uint256[]", "name": "extensions", "type": "uint256[]" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0x84b0196e" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function", "signature": "0x40c10f19" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0x06fdde03" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "nonces", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0x7ecebe00" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0x8da5cb5b" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" } ], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function", "signature": "0xd505accf" }, { "inputs": [], "name": "profiles", "outputs": [ { "internalType": "contract IAugustsProfiles", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0x495057cf" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function", "signature": "0x715018a6" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0x95d89b41" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true, "signature": "0x18160ddd" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function", "signature": "0xa9059cbb" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function", "signature": "0x23b872dd" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function", "signature": "0xf2fde38b" } ];
let faucetABI = [ { "inputs": [ { "internalType": "address", "name": "tokenAddress", "type": "address" }, { "internalType": "address", "name": "ownerAddress", "type": "address" } ], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Withdrawal", "type": "event" }, { "inputs": [], "name": "getBalance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lockTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "requestTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "setLockTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "setWithdrawalAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "token", "outputs": [ { "internalType": "contract Iaugust", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawalAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ];


const profilesAddress = "0x439f3d1A16698aCD2BD74e01CBe992c9D0CCf1F5";
const coinAddress = "0x2e992BF3732E71A83E44251f9B0dE80553A73632";
const faucetAddress = "0x24AcE8d1f490E05C5A66d6186bAfe051CCb3eEdc";



let web3 = new Web3(window.ethereum);

let profiles_contract = new web3.eth.Contract(profilesABI, profilesAddress);
let coin_contract = new web3.eth.Contract(coinABI, coinAddress);
let faucet_contract = new web3.eth.Contract(faucetABI, faucetAddress);


async function createLeaderboard() {
  const fullprofiles = await profiles_contract.methods.getAllProfiles().call();
  const walletIDs = [...fullprofiles[0]]; 
  const walletNames = [...fullprofiles[1]]; 
  const walletBalances = [];


  for (let i=0; i< walletIDs.length; i++) {
    let addy = walletIDs[i];
    try {
      let singleaddy = await coin_contract.methods.balanceOf(addy).call();
      walletBalances.push(singleaddy.slice(0,singleaddy.length-18));
    } catch (error) {
      console.error(`Error fetching balance for ${addy}:`, error);
    }
    }
  
  const sortedwalletBalances = [];
  const sortedwalletIDs = [];
  const sortedwalletNames = [];




  while (walletBalances.length != 0) {
    let peakindex = 0;
    for (let i=0; i < walletBalances.length; i++) {
      if (Number(walletBalances[i]) > Number(walletBalances[peakindex])) {
        peakindex = i; 
      }
    }

    sortedwalletBalances.push(walletBalances[peakindex]);
    sortedwalletIDs.push(walletIDs[peakindex]);
    sortedwalletNames.push(walletNames[peakindex]);
    walletBalances.splice(peakindex, 1);
    walletIDs.splice(peakindex, 1);
    walletNames.splice(peakindex, 1);

  }
  const leaderboard = document.getElementById("leaderboard");
  leaderboard.innerHTML = "";
  for (let i=0; i< sortedwalletBalances.length; i++) {

    leaderboard.innerHTML += `<div class="roww">
    <div class="namee">${sortedwalletNames[i]}</div><div class="scoree">${sortedwalletBalances[i]}</div>
    </div>
    `;

  }

  
}




async function connectWallet() {
  if (window.ethereum) {
    const accounts = await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .catch((err) => {
        if (err.code === 4001) {
          console.log("Please connect to MetaMask.");    
          document.getElementById("connectMessage").innerHTML =
          "Please connect to Metamask";
          document.getElementById("MetamaskBtn").innerHTML = "MetaMask";
        } else {
          console.error(err);
        }
      });
    if (accounts[0]) {
      console.log("We have an account");
      document.getElementById("connectMessage").innerHTML =
      "MetaMask connected";
      document.getElementById("MetamaskBtn").innerHTML = "Connected";
      staticProfileCheck();
    }
  } else {
    console.error("No web3 provider detected");
    document.getElementById("connectMessage").innerText =
      "No web3 provider detected. Please install MetaMask";
  }
}


document.getElementById("MetamaskBtn").addEventListener("click", async (e) => {
  e.preventDefault();
  const tweetSubmitButton = document.getElementById("MetamaskBtn");
  tweetSubmitButton.innerHTML = '<div class="spinner">🦊🦊🦊</div>';
  tweetSubmitButton.disabled = true;
  try {
    if (typeof accounts == 'undefined'){await connectWallet();} else{}
  } catch (error) {
    console.error("Error connecting to MetaMask", error);
  } finally {
    tweetSubmitButton.disabled = false;
  }
    
});


document.getElementById("ProfileBtn").addEventListener("click", async (e) => {
  e.preventDefault();
  const accounts = await web3.eth.getAccounts();
  if (accounts.length == 0){alert('Must connect MetaMask first.'); await connectWallet();} else{
  const ProfileButton = document.getElementById("ProfileBtn");
  ProfileButton.innerHTML = '<div class="spinner">🥺🥺🥺</div>';
  ProfileButton.disabled = true;
  try {
    if (await profiles_contract.methods.findUserIndex(accounts[0]).call() == -1) {
      let username = prompt("Please register a username. Usernames are public and final:", "King August (from madagascar)");
      if (await profiles_contract.methods.findStringIndex(username).call() > -1) {
        let newusername = prompt("Username taken, please try a different name. Usernames are public and final:", "King August (from madagascar)");
        while (await profiles_contract.methods.findStringIndex(newusername).call() > -1) {
          newusername = prompt("Username taken, please try a different name. Usernames are public and final:", "King August (from madagascar)");
        }
        await profiles_contract.methods.addUser(accounts[0], newusername).send({ from: accounts[0] });
        ProfileButton.innerHTML = 'Profile Set';
      } else{
        await profiles_contract.methods.addUser(accounts[0], username).send({ from: accounts[0] });
        ProfileButton.innerHTML = 'Profile Set';
      }
      
    } else{
      alert("Profile already registered!");
      ProfileButton.innerHTML = 'Profile Set';
    }
  } catch (error) {
    console.error("Error creating user profile", error);
  } finally {
    ProfileButton.disabled = false;
    if (ProfileButton.innerHTML == '<div class="spinner">🥺🥺🥺</div>'){
      ProfileButton.innerHTML = 'Add Profile';
    }
  }
}
});



async function staticProfileCheck() {
  const accounts = await web3.eth.getAccounts();
  if (await profiles_contract.methods.findUserIndex(accounts[0]).call() > -1) {
    document.getElementById("ProfileBtn").innerHTML = 'Profile Set';
  }
}

async function changeChain() {
  try {
    await web3.enable();

    const chainId = await web3.request({ method: 'eth_chainId' });
    if (chainId !== '0xAA36A7') {
        await web3.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xAA36A7' }] 
        });
    web3.on("chainChanged", (chainId) => window.location.reload());
    }
} catch (error) {
    console.error('User denied account access or network switch');
}
}




document.getElementById("FaucetBtn").addEventListener("click", async (e) => {
  e.preventDefault();
  const accounts = await web3.eth.getAccounts();
  if (accounts.length == 0) {
    alert('Must connect MetaMask first.'); await connectWallet();
  } else {
    if (await profiles_contract.methods.findUserIndex(accounts[0]).call() == -1) {
      alert('Must create profile first.')
    } else {
      const faucetButton = document.getElementById("FaucetBtn");
      faucetButton.innerHTML = '<div class="spinner">🚰🚰🚰</div>';
      faucetButton.disabled = true;
      try {
      await faucet_contract.methods.requestTokens().send({ from: accounts[0] }); 
      faucetButton.innerHTML = 'Dripped💧';
      faucetButton.disabled = false;
      document.getElementById("leaderboard").innerHTML = "";
      createLeaderboard();

      } catch (error) {
        faucetButton.innerHTML = 'Faucet';
        faucetButton.disabled = false;
      }
    }
  }
});



document.getElementById("changeChainBtn").addEventListener("click", async (e) => {
  changeChain();
  createLeaderboard();
})




var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


window.addEventListener('load', async () => {
  if (typeof window.ethereum !== 'undefined') {
      window.web3 = new Web3(window.ethereum);
      try {
          // Request account access if needed
          await window.ethereum.enable();

          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          if (chainId !== '0xAA36A7') {
              await window.ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId: '0xAA36A7' }] // Sepolia chain ID
              });
          window.ethereum.on("chainChanged", (chainId) => window.location.reload());
          }
      } catch (error) {
          console.error('User denied account access or network switch');
      }
  } else {
      console.error('MetaMask not detected!');
  }
  connectWallet();
  createLeaderboard();
});

