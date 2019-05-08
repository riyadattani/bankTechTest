function Account() {
  this.balance = 0;
  this.transactions = [];
}

Account.prototype = {

  deposit(amount, date = (new Date).toLocaleDateString()) {
    var deposit = {
      type: "deposit",
      date: date,
      amount: amount,
      balance: this.balance += amount
    }
    this.transactions.push(deposit)
  },

  withdraw(amount, date = (new Date).toLocaleDateString()) {
    var withdrawal = {
      type: "withdrawal",
      date: date,
      amount: amount,
      balance: this.balance -= amount
    }
    this.transactions.push(withdrawal)
  },

  currentBalance() {
    return this.balance;
  },

  returnTransactions() {
    return this.transactions;
  },

}
