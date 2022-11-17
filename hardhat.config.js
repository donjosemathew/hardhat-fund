require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
/** @type import('hardhat/config').HardhatUserConfig */
const RINKBY_URL = process.env.RINKBY_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN = process.env.ETHERSCAN_API;
module.exports = {
  allowUnlimitedContractSize: true,
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: RINKBY_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: ETHERSCAN,
  },
};
