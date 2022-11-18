const { assert } = require("chai");
const { ethers } = require("hardhat");

//describe
describe("SimpleStorage", function () {
  let simpleStorageFactory, simpleStorage;
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Should update when we call store", async function () {
    const expectedValue = "0";
    const currentValue = await simpleStorage.retrieve();
    assert.equal(expectedValue.toString(), currentValue);
  });
  it("Should update when we call store", async function () {
    const expectedValue = "7";
    const transactionResponse = await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1);
    const currentValue = await simpleStorage.retrieve();
    assert.equal(expectedValue, currentValue);
  });
});
