function Statement(account) {
  this.account = account;
}

Statement.prototype.print = function () {
  var statement = "date || credit || debit || balance \n"
  this.account.returnTransactions().forEach(function(transaction) {
    if (transaction.type == "deposit") {
     statement += transaction.date + " || || " + transaction.amount + " || " + transaction.balance
   } else { (transaction.type == "withdrawal")
     statement += transaction.date + " || " + transaction.amount + " || || " + transaction.balance
   }
   statement += " \n"
  });
  return statement
};
