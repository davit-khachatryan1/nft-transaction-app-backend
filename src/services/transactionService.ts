import { ethers } from 'ethers';
import { config } from '../config';

const provider = new ethers.JsonRpcProvider(config.rpcUrl);
const wallet = new ethers.Wallet(config.privateKey, provider);

export const sendTransaction = async (recipient: string, customData: string): Promise<string> => {
    const tx = {
        to: recipient,
        value: ethers.parseEther('0.01'), // Example: Sending 0.01 ETH
        data: ethers.hexlify(ethers.toUtf8Bytes(customData)), // Custom data in transaction
    };

    const transactionResponse = await wallet.sendTransaction(tx);
    await transactionResponse.wait(); // Wait for transaction confirmation
    return transactionResponse.hash;
};
