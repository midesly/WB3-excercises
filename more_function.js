function displayMailingLabel(name,address,city,state,zip){
    console.log("Peter");
    console.log("456 Tabitha Cir");
    console.log("Patri");
    console.log("FL");
    console.log("29876");
}
// This is a call to abve function

displayMailingLabel()

// new function
function addNumbers(num1,num2){
    console.log("num 1" + num1);
    console.log("num 2" + num2);
    let total = (num1 + num2);
    console.log("total" + total);
}

// call to function
addNumbers(85,9);

function displayReceipt(totalDue,amountPaid){
    console.log("Total Due: $" +totalDue);
    console.log("Amount Paid: $" + amountPaid);
    if(amountPaid < totalDue){
        let owed = (totalDue - amountPaid);
        console.log("OWED: $" +owed);
    }else{
        let credit = Math.abs(totalDue - amountPaid);
        console.log("CREDIT BALANE: $" + credit);
    }
}

//call to function
displayReceipt(110,130)