
var fs = require('fs');

class Wallet {
    constructor(initial) {
        this.solde = initial;
        this.transaction = [];
        var data= fs.readFileSync('./json/wallet.json', "utf8");
        if(data == "") {
            this.addTransac("Initial", initial)
        }
        else {
            this.transaction = JSON.parse(data)
        }
            var soldeg=0;
            this.transaction.forEach(function(item) {
                if(item.type == "Initial") {
                    soldeg = item.montant;
                }
                else if(item.type == "Ajout") {
                    soldeg += item.montant;
                }
                else if(item.type == "Retrait") {
                    soldeg -= item.montant;
                }
                //tem.type = initial = this.solde = item.montant
                //item.type = Ajout = this.solde += item.montant
                //item.type = Retrait = this.solde -= item.montant
                //console.log(item.type)
        })
        this.solde = soldeg;
    
    }
    writeToFile() {
        fs.writeFile('./json/wallet.json', JSON.stringify(this.transaction), err => {})
    }

    getsolde() {
        return this.solde;
    }
    addmoney(montant) {
        if (this.solde + montant < 30) {
            this.solde = this.solde + montant;
            this.addTransac("Ajout", montant)
            return this.solde;
        }
        else {
            return ("Montant dépassé");
        }
    }
    removemoney(montant) {
        if (montant < this.solde) {
            this.solde = this.solde - montant;
            this.addTransac("Retrait", montant)
            return this.solde;
        }
        else {
            return ("Vous n'avez pas assez d'argent");
        }
    }
    getList() {
        return this.transaction;
    }
/*    transactionmoney(montant, type) {


        var texte = type + " " + montant + " €";
        this.transaction.push(texte);
    }
*/

    addTransac(type, montant) {
        var uneTransac = {
            type: type,
            montant: montant,
            date: new Date(),
        }
        this.transaction.push(uneTransac)
        this.writeToFile();
    }
}
module.exports = Wallet;