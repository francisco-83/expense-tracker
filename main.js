//to-do

var addButton = document.getElementById("addButton");
addButton.addEventListener("click", handleButton);
var balance = 0;
var totalExpense = 0;
var totalIncome = 0;

function handleButton(){
       
    var row = 1;
    var date = document.getElementById("date").value;
    var category = document.getElementById("categories").value;
    var description = document.getElementById("description").value;
    var amount = parseInt(document.getElementById("amount").value);

    if(!date || !category || !description || !amount) {
        alert("Please fill all the fields or Check values");
        return;
    }

    var display = document.getElementById("display");
    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = date;
    cell2.innerHTML = category;
    cell3.innerHTML = description;
    cell4.innerHTML = "$" + amount;

    row++;
    
    if(category == "income") {
        handleIncome(amount);
    } else {
        handleExpense(amount);    
    }   
    
}


function handleIncome(amount) {
    balance = balance + amount;
    var currentIncome = document.getElementById("balance");
    currentIncome.innerHTML = balance;    
}

function handleExpense(amount) {
    balance = balance - amount;
    var currentIncome = document.getElementById("balance");
    currentIncome.innerHTML = balance;
}