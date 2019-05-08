describe("Statement", function() {
  var account = new Account;

  it("should print the transactions made in the account", function () {
    var oldDate = new Date(2019, 5, 1);
    stubDate = account.getFormattedDate(oldDate);

    account.deposit(80, stubDate);
    account.withdraw(50, stubDate)
    statement = new Statement(account)
    expect(statement.print()).toEqual("date || credit || debit || balance \n1/6/2019 || || 80 || 80 \n1/6/2019 || 50 || || 30 \n")
  });

});
