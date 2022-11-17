//imports

const { ethers, run, network } = require("hardhat");

//async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log(`Deployed Contract to : ${simpleStorage.address}`);
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API) {
    await simpleStorage.deployTransaction.wait(6);
    await verify(simpleStorage.address, []);
  }

  const currentvalue = await simpleStorage.retrieve();
  console.log("Current Value id:" + currentvalue);

  //update the current value
  const transactionResponse = await simpleStorage.store(7);
  await transactionResponse.wait(1);
  const updatedvalue = await simpleStorage.retrieve();
  console.log("Current Value id:" + updatedvalue);
}

async function verify(contractAddress, args) {
  console.log("Verifying");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    }); // same as hardhat verify
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified");
    } else {
      console.log(e);
    }
  }
}
//main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
  });
