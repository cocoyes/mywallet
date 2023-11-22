const bitcoin = require('bitcoinjs-lib');
const bip39 = require('bip39');
const litecore = require('litecore-lib')

// Generate a random mnemonic (12 words)
const mnemonic = "123456789";

// Convert the mnemonic to a seed
const seed = bip39.mnemonicToSeedSync(mnemonic);

const path = "m/44'/2'/0'/0/0"
const network = bitcoin.networks.litecoin

const xpriv = litecore.HDPrivateKey.fromSeed(seed, network) // BIP32 Root Key
const extPrivKey = xpriv.derive(path) // BIP32 Extended Private Key
const privKey = extPrivKey.privateKey
const privateKey = privKey.toWIF()
const pubKey = privKey.publicKey
const publicKey = litecore.Address(pubKey, network).toString()


console.log('Mnemonic (助记词):', mnemonic);
console.log('Private Key (私钥):', privateKey);
console.log('Litecoin Address (LTC地址):', publicKey);
