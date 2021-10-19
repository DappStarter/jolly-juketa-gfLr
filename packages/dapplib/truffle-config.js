require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stove deny pulse purse gentle light army gaze'; 
let testAccounts = [
"0x3353443a198f008864786b9acd995664274c8015d5438dee99a90d2dec9a5913",
"0x217f7ed6409d602541e17a187b4b2efb875d23485b3f992f1ea597c3ab5d4f0d",
"0xa5467e8b709124c0550fec315b49be0827e83d6759afa1c395aa0584b9c7e35c",
"0xd567db67dfb06effec77cf18384428e15283293ee81c2816b44469fea4fe1398",
"0x4c5dcba7c82aa9115371a41363d5564f4afb1eac1fddeadc9f5ff8fd33472cbd",
"0x0e5f317d31c72f1ef739764832a67d8ccf41971314b444e3124b1917ac88a2b6",
"0x68d99a794d07c39d628191d690664a6c5deab2e49d27dd358b62465b72d59f74",
"0xe6cfb950a6fda87634e65cd3f739c593abfa0c4780e90ef3f84a1fa924c78362",
"0xa5d6ba0d19a6a2e32d21390a1da50eaa8a43c62839ff1eefe1397f85b2bc1b20",
"0x929aaf3bae84a4c14343064dd6dd682bcfe9db2e621130531ee42561928d72e6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


