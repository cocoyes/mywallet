const bitcoin = require('bitcoinjs-lib');
const bip39 = require('bip39');

// Generate a random mnemonic (12 words)
const mnemonic = "111222333";

// Convert the mnemonic to a seed
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Use the seed to generate an HD Wallet
const root = bitcoin.bip32.fromSeed(seed);

// Derive the first child private key
const child = root.derivePath("m/44'/0'/0'/0/0");

// Get the private key and public key
const privateKey = child.toWIF();
const publicKey = bitcoin.payments.p2pkh({ pubkey: child.publicKey }).address;

console.log('Mnemonic (助记词):', mnemonic);
console.log('Private Key (私钥):', privateKey);
console.log('Public Key (公钥):', publicKey);
