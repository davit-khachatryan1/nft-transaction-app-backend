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
const config_1 = require("../config");
const provider = new ethers_1.ethers.JsonRpcProvider(config_1.config.rpcUrl);
const wallet = new ethers_1.ethers.Wallet(config_1.config.privateKey, provider);
const sendTransaction = (recipient, customData) => __awaiter(void 0, void 0, void 0, function* () {
    const tx = {
        to: recipient,
        value: ethers_1.ethers.parseEther("0.01"),
        data: ethers_1.ethers.hexlify(ethers_1.ethers.toUtf8Bytes(customData)),
    };
    const transactionResponse = yield wallet.sendTransaction(tx);
    yield transactionResponse.wait();
    return transactionResponse.hash;
});
exports.sendTransaction = sendTransaction;
