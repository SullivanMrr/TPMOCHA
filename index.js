var express = require('express');
var app = express();
var ejs = require('ejs');
app.set('view engine', 'ejs');
var Wallet = require('./models/wallet');


var Wallet1 = new Wallet(0);

app.get('/', function (req, res) {
    
    var WalletSolde = Wallet1.getsolde();
    res.render('index',{argent:WalletSolde,histo:Wallet1.getList()});
});
app.get('/ajoutArgent', function (req, res) {
    console.log(req.query.txtAjouter);
    WalletArgent = Wallet1.addmoney(parseFloat(req.query.txtAjouter));
    res.render('index',{argent:WalletArgent,histo:Wallet1.getList()});
});
app.get('/retraitArgent', function (req, res) {
    console.log(req.query.txtRetirer);
    WalletArgentRetirer = Wallet1.removemoney(parseFloat(req.query.txtRetirer));
    res.render('index',{argent:WalletArgentRetirer,histo:Wallet1.getList()});
    
});

app.get('/transaction', function (req, res) {

    res.render('transaction',{histo:Wallet1.getList()});
    
});

app.get('/ajout', function (req, res) {

    res.render('ajout')
});
app.get('/retrait', function (req, res) {

    res.render('retrait')
});

app.listen(8000, function () {
    console.log('Listening to port 8000');
});