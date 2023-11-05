const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const { Payment } = require('../models');

dotenv.config();

const PaymentRoutes = express.Router();

PaymentRoutes.get('/', async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.status(200).json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'There was an error getting the payments' });
  }
});

PaymentRoutes.post('/', async (req, res) => {
  try{
    const { amount, transferCode, email } = req.body;

    const tokenResponse = await axios.get(`${process.env.DEV_URL}token?email=${email}`)

    const payment = await Payment.findOne({ where: { email } });
    if (payment) {
      payment.retries += 1;
      await payment.save();
      return res.status(401).json({ error: 'Payment already sent', payment: payment.toJSON() });
    }
    else {
      const paymentResponse = await axios.post(`${process.env.DEV_URL}payment?email=${email}&transferCode=${transferCode}`, {
        transferCode,
        amount
      }, {
        headers: {
          Authorization: tokenResponse.data
        }
      });

      // Revisar respuesta del payment !!!
      const newPayment = await Payment.create({
        amount,
        transferCode,
        email
      });
      return res.status(201).json(newPayment);
    }

  } catch (error) {
    console.log(`\n\n\n${error}`);
    console.log(error.response);
    console.log("\n\n\n");
    return res.status(500).json({ error: 'There was an error sending the payment' });
  }
});

module.exports = PaymentRoutes;
