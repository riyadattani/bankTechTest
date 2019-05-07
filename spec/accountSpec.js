describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("the balance should increase if the user makes a deposit", function() {
    account.deposit(50)
    expect(account.currentBalance()).toEqual(50);
  });

  it("the balance should decrease if the user makes a withdrawal", function() {
    account.withdraw(50)
    expect(account.currentBalance()).toEqual(-50);
  });

  it("the balance should change depending on the withdrawal or deposit", function() {
    account.deposit(80)
    account.withdraw(50)
    expect(account.currentBalance()).toEqual(30);
  });

  it("there should be 2 transactions", function() {
    account.deposit(80)
    account.withdraw(50)
    account.deposit(100)
    expect(account.transactions.length).toEqual(3);
  });

  it ("should return the date when deposit is made", function () {
    var oldDate = new Date(2018, 5, 7);
    stubDate = account.getFormattedDate(oldDate);
    account.deposit(50, stubDate);
    expect(account.transactions[0].date).toEqual("7/6/2018")
    expect(account.transactions[0].amount).toEqual(50)
    expect(account.transactions[0].balance).toEqual(50)
  });
});
