const item = document.getElementById("item");
const amount = document.getElementById("amount");
const date = document.getElementById("date");
const expenseTotal = document.getElementById("total");
const submitBtn = document.getElementById("submitBtn");
const total = document.getElementById("total");
const list = document.querySelector("ul");

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

  expenseTotal.textContent = calculateTotal(expenseList).toFixed(2);

  renderList(expenseList);
}

const calculateTotal = (expenseList) =>
  expenseList.reduce((sum, item) => (sum += item.expenseAmount), 0);

const renderList = (expenseList) => {
  list.innerHTML = "";
  expenseList.map((item) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("id", `${item.expenseId}`);
    listItem.innerHTML = `${item.expenseItem} ${item.expenseDate} $${item.expenseAmount}`;

    list.appendChild(listItem);
  });

  item.value = "";
  amount.value = "";
  date.value = "";
};

const deleteAll = document.getElementById("deleteAllBtn");

deleteAll.addEventListener("click", () => {
  expenseList = [];
  list.innerHTML = "";

  item.value = "";
  amount.value = "";
  date.value = "";
  totalExpenses = 0;
  total.textContent = "";
});
