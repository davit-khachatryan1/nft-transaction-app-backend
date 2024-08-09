"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTransaction = void 0;
const ethers_1 = require("ethers");
console.log(process.env.PRIVATE_KEY);
const provider = new ethers_1.ethers.JsonRpcProvider(`https://polygon-amoy.infura.io/v3/e3b24eb7f51040338ccc84dfba3f201a`);
console.log(provider.destroyed);
const wallet = new ethers_1.ethers.Wallet('0777eca69099d9c5ddd5eca7be4cb7e002c872b010920913e29b334ebeaa9f73', provider);
const sendTransaction = (recipient, customData) => __awaiter(void 0, void 0, void 0, function* () {
    const tx = {
        to: recipient,
        value: ethers_1.ethers.parseEther('0.01'), // Example: Sending 0.01 ETH
        data: ethers_1.ethers.hexlify(ethers_1.ethers.toUtf8Bytes(customData)), // Custom data in transaction
    };
    const transactionResponse = yield wallet.sendTransaction(tx);
    yield transactionResponse.wait(); // Wait for transaction confirmation
    return transactionResponse.hash;
});
exports.sendTransaction = sendTransaction;
