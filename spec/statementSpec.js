describe("Statement", function() {
  var mockAccount = {
    returnTransactions: function() {
      return [{type: 'withdrawal', date: (new Date(2019, 05, 02)).toLocaleDateString(), amount: "20.00", balance: "80.00"}, {type: 'deposit', date: (new Date(2019, 05, 01)).toLocaleDateString(), amount: "100.00", balance: "100.00"}]
    },

    currentBalance: function() {
      return 80;
    }
  };

  it("should print the transactions made in the account", function () {
    statement = new Statement(mockAccount)
    expect(statement.print()).toEqual("date || credit || debit || balance \n02/06/2019 || || 20.00 || 80.00 \n01/06/2019 || 100.00 || || 100.00 \n")
  });
});
