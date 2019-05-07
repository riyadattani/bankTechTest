describe("Statement", function() {
  var account = new Account;

  it("should print the transactions made in the account", function () {
    account.deposit(80)
    account.withdraw(50)
    statement = new Statement(account)
    expect(statement.print()).toEqual("date || credit || debit || balance \n7/5/2019 || || 80 || 80 \n7/5/2019 || 50 || || 30 \n")
  });

});
