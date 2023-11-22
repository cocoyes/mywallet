const crypto = require('crypto');
const { ethers } = require('ethers');

// 输入的任意长度字符串
const inputString = 'your_custom_string_here';

// 使用 crypto 模块计算字符串的 SHA-256 哈希
const hash = crypto.createHash('sha256').update(inputString).digest('hex');

// 取哈希的前32个字符，作为私钥的哈希
const privateKeyHash = '0x' + hash.substring(0, 64);

// 将哈希字符串转换为 Buffer
const privateKeyBuffer = Buffer.from(privateKeyHash.substring(2), 'hex');

// 使用 Buffer 生成以太坊钱包
const wallet = new ethers.Wallet(privateKeyBuffer);

// 获取以太坊地址
const address = wallet.address;

// 获取以太坊私钥
const privateKey = wallet.privateKey;

console.log('输入字符串:', inputString);
console.log('以太坊地址:', address);
console.log('以太坊私钥:', privateKey);
