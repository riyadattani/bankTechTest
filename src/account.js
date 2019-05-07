function Account() {
  this.balance = 0;
  this.transactions = [];
}

Account.prototype.getFormattedDate = function(currentDate = new Date) {
  let formattedDate = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear()
  return formattedDate;
};

Account.prototype.deposit = function (amount, date = this.getFormattedDate()) {
  var deposit = {
    date: date,
    amount: amount,
    balance: this.balance += amount
  }
  this.transactions.push(deposit)
};

Account.prototype.withdraw = function (amount, date = this.getFormattedDate()) {
  var withdrawal = {
    date: date,
    amount: amount,
    balance: this.balance -= amount
  }
  this.transactions.push(withdrawal)
};

Account.prototype.currentBalance = function () {
  return this.balance;
};
