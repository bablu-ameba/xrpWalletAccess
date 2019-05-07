const config = require('config.json');
// const db = require('_helpers/db');
// const DataModel = db.Oldtransactions;
const RippleAPI = require('ripple-lib').RippleAPI;
var test_server = 'wss://s2.ripple.com';
// const myAddress = 'rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn';
const api = new RippleAPI({
    server: test_server // Public rippled server
});


module.exports = {
    getTransactionsByAccount,
    getBalanceByAccount
};


async function getTransactionsByAccount(req, res) {
    return await api.connect().then(() => {
        return api.getTransactions(req.params.walletAddress);
    }).then(transactions => {
        res.json(transactions)
    }).then(() => {
        return api.disconnect();
    }).then(() => {
        console.log('done and disconnected.');
    }).catch(err => {
        res.send(err)
    });
}

async function getBalanceByAccount(req, res) {
    return await api.connect().then(() => {
        return api.getBalances(req.params.walletAddress);
    }).then(balances => {
        res.json(balances)
    }).then(() => {
        return api.disconnect();
    }).then(() => {
    }).catch(err => {
        res.send(err)

    });
}

