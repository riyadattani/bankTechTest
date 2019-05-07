function Account() {
  this.balance = 0;
  this.transactions = [];
}

Account.prototype.getFormattedDate = function(currentDate = new Date) {
  let formattedDate = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear()
  return formattedDate;
};

Account.prototype.deposit = function (amount, date = this.getFormattedDate(), type) {
  var deposit = {
    type: "deposit",
    date: date,
    amount: amount,
    balance: this.balance += amount
  }
  this.transactions.push(deposit)
};

Account.prototype.withdraw = function (amount, date = this.getFormattedDate(), type) {
  var withdrawal = {
    type: "withdrawal",
    date: date,
    amount: amount,
    balance: this.balance -= amount
  }
  this.transactions.push(withdrawal)
};

Account.prototype.currentBalance = function () {
  return this.balance;
};

Account.prototype.returnTransactions = function () {
  return this.transactions;
};
