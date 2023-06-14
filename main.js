//https://wwww.w3schools.com/jsref/met_table_deleterow.asp

var addButton = document.getElementById("addButton");
addButton.addEventListener("click", handleButton);
var balance = 0;
var totalExpense = 0;
var totalIncome = 0;

function handleButton(){
       
    var row = 1; // row header and keeps track of rowIndex
    var date = document.getElementById("date").value;
    var category = document.getElementById("categories").value;
    var description = document.getElementById("description").value;
    var amount = parseInt(document.getElementById("amount").value);

    if(!date || !category || !description || !amount) {
        alert("Please fill all the fields or Check values");
        return;
    }

    // grab the display(table) and add a new row
    var display = document.getElementById("display");
    var newRow = display.insertRow(row);

    // Cells for each neRow
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var delCell = newRow.insertCell(4);

    // Delete Button
    var delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delCell.appendChild(delBtn);

    // Info for every cell
    cell1.innerHTML = date;
    cell2.innerHTML = category;
    cell3.innerHTML = description;
    cell4.innerHTML = "$" +  amount;
    
    delBtn.addEventListener("click", function() {
        var currentIncome = document.getElementById("balance");
        balance = balance - amount;
        currentIncome.innerHTML = balance;
        deleteMyRow(this);
    });
    
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

          
function deleteMyRow(eventObj) {   
    var i = eventObj.parentNode.parentNode.rowIndex;
    document.getElementById("display").deleteRow(i);

}