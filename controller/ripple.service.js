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
    try {
        await api.connect();
        var transactions = await api.getTransactions(req.params.walletAddress).catch(err => {
            res.send(err)
        });
        await api.disconnect();
        await res.json(transactions);
    } catch (errr) {
        await api.disconnect();
        res.send(errr)
    }
}
async function getBalanceByAccount(req, res) {
    try {
        await api.connect();
        var balances = await api.getBalances(req.params.walletAddress).catch(err => {
            res.send(err)
        });
        await api.disconnect();
        await res.json(balances);

    } catch (error) {
        res.send(error)
    }
    console.log('done and disconnected.');
}

