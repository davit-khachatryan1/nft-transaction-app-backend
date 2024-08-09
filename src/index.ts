import express from 'express';
import transactionRoutes from './routes/transaction';

import { config } from './config';

const app = express();
app.use(express.json());

app.use('/api/transaction', transactionRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
