require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["e05aacc07c0ae1e9add40a5fff45f5b3e24caf9bce94fc6f4ce73b943fa44e6f"], 
    },
  },
};
