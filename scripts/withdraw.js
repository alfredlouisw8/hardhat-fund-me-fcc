const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
  const { deployer } = await getNamedAccounts()
  const fundMe = await ethers.getContract("FundMe", deployer)
  console.log("withdraw...")
  const transactionResponse = await fundMe.withdraw()
  await transactionResponse.wait(1)
  console.log("withdrawed")
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
