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
});
