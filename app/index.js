const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const PaymentRoutes = require('./routes/paymentRoutes');

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use( express.json() );
app.use( cors( { origin: `http://localhost:${ PORT }` } ) );


app.get('/', (req, res) => {
  res.send('Hello World! Welcome to the ApiPayments server');
});

app.use('/payments', PaymentRoutes);

app.listen(PORT, () => {
return console.log(`Express server is listening at http://localhost:${PORT} 🚀`);
});