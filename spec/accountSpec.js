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
    expect(account.returnTransactions().length).toEqual(3);
  });

  it ("should return the date when deposit is made", function () {
    var oldDate = new Date(2018, 5, 7);
    stubDate = account.getFormattedDate(oldDate);
    account.deposit(50, stubDate);
    expect(account.transactions[0].date).toEqual("7/6/2018")
  });

  it ("should return the amount when a deposit/withdrawal is made", function () {
    account.deposit(50)
    expect(account.transactions[0].amount).toEqual(50)
  });

  it ("should return the balance when a deposit/withdrawal is made", function () {
    account.deposit(50)
    account.withdraw(20)
    expect(account.transactions[1].balance).toEqual(30)
  });

  it ("should return the type when a deposit/withdrawal is made", function () {
    account.deposit(50)
    expect(account.transactions[0].type).toEqual("deposit")
  });
});