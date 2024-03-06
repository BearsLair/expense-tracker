const item = document.getElementById("item");
const amount = document.getElementById("amount");
const date = document.getElementById("date");
const expenseTotal = document.getElementById("total");
const submit = document.getElementById("total");

let expenseList = [];

function Expense(expenseId, expenseItem, expenseAmount, expenseDate) {
  this.expenseId = expenseId;
  this.expenseItem = expenseItem;
  this.expenseAmount = expenseAmount;
  this.expenseDate = expenseDate;
}

function addExpense() {}
let expenseId = 0;

if (expenseList.length === 0) {
}
// function renderList() { };
