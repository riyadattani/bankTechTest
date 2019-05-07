function Account() {
  this.balance = 0;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
};

Account.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

Account.prototype.currentBalance = function () {
  return this.balance;
};
