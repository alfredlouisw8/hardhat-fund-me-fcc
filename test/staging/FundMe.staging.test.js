const { getNamedAccounts, ethers, network } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

developmentChains.includes(network.name)
  ? describe.skip
  : describe("FundMe", async function () {
      let fundMe
      let deployer
      let mockV3Aggregator
      const sentValue = ethers.utils.parseEther("1")
      beforeEach(async function () {
        // const accounts = await ethers.getSigners()
        deployer = (await getNamedAccounts()).deployer
        fundMe = await ethers.getContract("FundMe", deployer)
      })
      describe("constructor", async function () {
        it("sets the aggregator addresses correctly", async function () {
          const response = await fundMe.getPriceFeed()
          assert.equal(response, mockV3Aggregator.address)
        })
      })
    })
