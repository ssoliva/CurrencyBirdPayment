import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectionDB from './config/database.js';
import PaymentRoutes from './routes/Payment.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 8000;

app.use( express.json() );
app.use( cors( { origin: `http://localhost:${ PORT }` } ) );

connectionDB();

app.get('/', (req, res) => {
  res.send('Hello NOD Readers!');
});

app.use('/payments', PaymentRoutes);

app.listen(PORT, () => {
return console.log(`Express server is listening at http://localhost:${PORT} 🚀`);
});
