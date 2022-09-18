import 'babel-register';
import 'babel-polyfill';
require('dotenv').config();
import HDWalletProvider from 'truffle-hdwallet-provider-privkey';
const privateKeys = process.env.PRIVATE_KEYS || ""

export const networks = {
  development: {
    host: "127.0.0.1",
    port: 8545,
    network_id: "*" // Match any network id
  },
  kovan: {
    provider: function () {
      return new HDWalletProvider(
        privateKeys.split(','),
        `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}` // Url to an Ethereum Node
      );
    },
    gas: 5000000,
    gasPrice: 5000000000,
    network_id: 42
  },
  main: {
    provider: function () {
      return new HDWalletProvider(
        privateKeys.split(','),
        `https://main.infura.io/v3/${process.env.INFURA_API_KEY}` // Url to an Ethereum Node
      );
    },
    gas: 5000000,
    gasPrice: 5000000000,
    network_id: 1
  },
  rinkeby: {
    provider: function () {
      return new HDWalletProvider(
        privateKeys.split(','),
        `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}` // Url to an Ethereum Node
      );
    },
    gas: 5000000,
    gasPrice: 5000000000,
    network_id: 4
  },
  ropsten: {
    provider: function () {
      return new HDWalletProvider(
        privateKeys.split(','),
        `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}` // Url to an Ethereum Node
      );
    },
    gas: 5000000,
    gasPrice: 5000000000,
    network_id: 3
  }
};
export const contracts_directory = './src/contracts/';
export const contracts_build_directory = './src/abis/';
export const compilers = {
  solc: {
    version: ">=0.6.0 <0.9.0",
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};