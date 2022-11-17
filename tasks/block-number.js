const { task } = require("hardhat/config");

task("block-number", "Current Block Number").setAction(
  async (taskArgs, hre) => {
    const blocknumber = await hre.ethers.provider.getBlockNumber();
    console.log("Block number is:" + blocknumber);
  }
);
