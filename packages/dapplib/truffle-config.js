require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note meadow cluster include clinic only select'; 
let testAccounts = [
"0x59cbef81bd5089de395a91a99d5ada65e18ced895fc43ec437ed18202750be5d",
"0xab3146d3fcc491ae866b1af706c46196f67b335433ac8857e0ec967cdbfa128c",
"0xb8746489eeb20a2c4c2295526762cc9706348208c904278719017c35d0cfe7cc",
"0xda8b7faca654a9c1c40d393164509be984c8e6e9cf31e285e0d46ab950b799b2",
"0x9cae4ed391326c84a3378a51f217d2e72dbd8bfd1a79bcadfcd697f4f29aecce",
"0x869ceb103f226098f58d3eb3b63a8b65d16f3b7b355e56c2adaf95f7e2633b1e",
"0x21502827ce0bb9c53066efadded04790c4b9464963e9cfdabc6d2c52a23171b5",
"0x3999da4396bdb69e838e6233c6177082091ed2a44a803b35996daf1d5dd67619",
"0x873250e472a267c7c93b2d48d2a45ce7c68774787dce820ba0aba39bcab25700",
"0x73844ef2d38f3c1416d6f6d1964a5ea407cbef63190393ed9249cae217fdee7c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

