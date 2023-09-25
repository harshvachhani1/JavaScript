const account = {
  name: "Kishan",
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },
  getAcoountsummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;
    let accountBalance = 0;
    this.expenses.forEach((expense) => {
      totalExpenses += expense.amount;
    });

    this.income.forEach((income) => {
      totalIncome += income.amount;
    });

    accountBalance = totalIncome - totalExpenses;

    return `${this.name} has ${totalExpenses} in expenses and balance ${accountBalance} and income ${totalIncome}`;
  },
};

account.addExpense("Rant", 950);
account.addExpense("Food", 50);
account.addIncome("job", 2000);
console.log(account.getAcoountsummary());
