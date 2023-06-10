//https://www.w3schools.com/jsref/met_table_deleterow.asp


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
    var cell5 = newRow.insertCell(4);
 
    cell1.innerHTML = date;
    cell2.innerHTML = category;
    cell3.innerHTML = description;
    cell4.innerHTML = "$" + amount;
    cell5.innerHTML = '<input type="button" value="Delete" onclick="deleteMyRow(this)"></input>'

    row++;
    
    if(category == "income") {
        handleIncome(amount);
    } else {
        handleExpense(amount);    
    }   

      // grab tr elements after created handle the event
      //var therows = document.getElementsByTagName("tr");
      //for (var i = 0; i < therows.length; i++) {
      //   therows[i].onclick = deleteMyRow;
      //}
    
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
    //var delrow = eventObj.target;
    //document.getElementById("display").deleteRow(1);

}


//var item = eventObj.target;
  //  item.setAttribute("class", "crossed");