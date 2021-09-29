var assert = require('assert');
var Wallet = require('../models/wallet')

describe('Wallet', function () {

    var wallet = new Wallet(12);

    it('Ajouter', function () {
        assert.equal(wallet.addmoney(5), 17)
    });



    it('Consulter', function () {
        assert.equal(wallet.addmoney(3), 20);
    });





});
