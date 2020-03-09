const INFURA_API_KEY = 'e154e0f611e5493cbaf0883d65e17387';
const MNEMONIC = 'angry coach kitchen auto mixed near clinic industry insect replace dice crunch\n';

const externalConfig = require('./truffle-config');

externalConfig.networks.ropsten = {
  url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`
};

module.exports = {
  ...externalConfig,
  // or from: '0x9741fa712a6912b862c9043f8752ffae513cb01895985998c61620da5aaf2d2d' // private Key
  from: {
    mnemonic: MNEMONIC,
    index: 0
  }
};
