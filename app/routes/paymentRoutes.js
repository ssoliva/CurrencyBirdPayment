const express = require('express');
const { Payment } = require('../models');

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

module.exports = PaymentRoutes;
