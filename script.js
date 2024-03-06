const item = document.getElementById("item");
const amount = document.getElementById("amount");
const date = document.getElementById("date");
const expenseTotal = document.getElementById("total");
const submitBtn = document.getElementById("submitBtn");
const total = document.getElementById("total");

let expenseList = [];
let totalExpenses = 0;

function Expense(expenseId, expenseItem, expenseAmount, expenseDate) {
  this.expenseId = expenseId;
  this.expenseItem = expenseItem;
  this.expenseAmount = expenseAmount;
  this.expenseDate = expenseDate;
}

submitBtn.addEventListener("click", addExpense);

function addExpense() {
  let expenseId = 0;

  expenseList.length === 0
    ? (expenseId = 1)
    : (expenseId = expenseList.length + 1);

  const expenseItem = item.value;
  const expenseAmount = Number(amount.value);
  const expenseDate = date.value;

  const addedExpense = new Expense(
    expenseId,
    expenseItem,
    expenseAmount,
    expenseDate
  );

  expenseList.push(addedExpense);

  // TEST
  console.log(expenseList);

  expenseTotal.textContent = calculateTotal(expenseList).toFixed(2);

  // renderList();
}

const calculateTotal = (expenseList) =>
  expenseList.reduce((sum, item) => (sum += item.expenseAmount), 0);

const renderList = (expenseList) => {
  expenseList.map();
};
