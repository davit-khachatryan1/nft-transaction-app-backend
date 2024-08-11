import express from 'express';
import cors from 'cors';
import transactionRoutes from './routes/transaction';
import { config } from './config';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/send-transaction', transactionRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
