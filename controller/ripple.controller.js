const express = require('express');
const router = express.Router();
const rippleService = require('./ripple.service');

// routes

router.get('/transactions/:walletAddress',rippleService.getTransactionsByAccount);
router.get('/balance/:walletAddress',rippleService.getBalanceByAccount);


module.exports = router;

