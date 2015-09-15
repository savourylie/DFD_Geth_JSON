#!/usr/bin/env node

var web3 = require("../index.js");

web3.setProvider(new web3.providers.HttpProvider(proxy_url));

var coinbase = web3.eth.coinbase;
console.log(coinbase);

var balance = web3.eth.getBalance(coinbase);
console.log(balance.toString(10));

