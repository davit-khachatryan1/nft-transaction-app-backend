import { Router, Request, Response } from 'express';
import { sendTransaction } from '../services/transactionService';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { recipient, customData } = req.body;
    const txHash = await sendTransaction(recipient, customData);
    res.json({ txHash });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Transaction failed' });
  }
});

export default router;
