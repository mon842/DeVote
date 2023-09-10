/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.7",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/EdS8JHP8XrVS9XR5PMzsVWOH1Q5rdw-F",
      accounts: [
        "179970732eaa8d91cd2abf6a6b4a4e4e79f9f3f5c550ae3f36ebcf68b0717af9",
      ],
    },
  },
};

// https://eth-sepolia.g.alchemy.com/v2/uecsvzYkFB61tAniKW3P47a_5_oPrcQ6
// c9d1c385dba17022230094f256e1d6128fea90a410c503a9c3c1e94cc2ce1380

// https://eth-sepolia.g.alchemy.com/v2/T-X_sm8Lzkr4gda1e8k2SCghTzr2G34f
// df57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e

//https://eth-sepolia.g.alchemy.com/v2/kTNcmhw9xvVUHa9-NXgyXVBYvgr3mBTY
// kTNcmhw9xvVUHa9-NXgyXVBYvgr3mBTY
// 179970732eaa8d91cd2abf6a6b4a4e4e79f9f3f5c550ae3f36ebcf68b0717af9
