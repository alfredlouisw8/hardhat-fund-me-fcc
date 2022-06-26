const networkConfig = {
  4: {
    name: "rinkeby",
    ethUsdPriceFeed: "",
  },
  137: {
    name: "polygon",
    ethUsdPriceFeed: "",
  },
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITIAL_ANSWER = 200000000000

module.exports = {
  networkConfig,
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
}
