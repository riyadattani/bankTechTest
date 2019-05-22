function Account() {
  this.balance = 0;
  this.transactions = [];
}

Account.prototype = {

  deposit(amount, date = (new Date).toLocaleDateString()) {
    var deposit = {
      type: "deposit",
      date: date,
      amount: amount.toFixed(2),
      balance: (this.balance += amount).toFixed(2)
    }
    this.transactions.push(deposit)
  },

  withdraw(amount, date = (new Date).toLocaleDateString()) {
    var withdrawal = {
      type: "withdrawal",
      date: date,
      amount: amount.toFixed(2),
      balance: (this.balance -= amount).toFixed(2)
    }
    this.transactions.push(withdrawal)
  },

  currentBalance() {
    return this.balance.toFixed(2);
  },

  returnTransactions() {
    return this.transactions.reverse();
  },

}

module.exports = Account;
