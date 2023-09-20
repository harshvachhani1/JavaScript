const myAccount = {
  name: "raj",
  expenses: 0,
  income: 0,
  balance: 500,
};

const addExpenses = (account, amount) => {
  account.expenses = account.expenses + amount;
  // account.expenses += amount;
  account.balance = account.balance - amount;
};

const addIncome = (account, income) => {
  account.income = account.income + income;
  account.balance = account.balance + income;
};

const resetAccount = (account) => {
  account.expenses = 0;
  account.income = 0;
  account.balance = 0;
};

const getAccountSummary = (account) => {
  // const balance = account.income - account.expenses;
  return `Account for ${account.name}, ${account.income} in income. ${account.expenses} in expenses balance is ${account.balance}`;
};

addIncome(myAccount, 2000);
addExpenses(myAccount, 200);

// console.log(myAccount);
console.log(getAccountSummary(myAccount));
// console.log(myAccount);

resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
