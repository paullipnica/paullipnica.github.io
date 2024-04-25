//DATE TIME 
function updateClock1() {
    const now = new Date(); 
    const datetimeElement = document.getElementById("datetime1");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[now.getMonth()];
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    const dateString = "Date: " + month + " " + day + ", " + year; 
    datetimeElement.textContent = dateString; 
}

function updateClock2() {
    const datetimeElement = document.getElementById("datetime2");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = "Time: " + hours + ":" + minutes + ":" + seconds;
    datetimeElement.textContent = timeString;
}
setInterval(updateClock1, 1000); 
updateClock1(); 
setInterval(updateClock2, 1000); 
updateClock2(); 


//PRODUCT
const productList = []; 

function updateProductList() {
    const dropdown = document.getElementById("DropDownPrice");
    dropdown.innerHTML = ""; 

    productList.forEach(product => {
        const option = document.createElement("option");
        option.textContent = product.name; 
        option.value = product.id; 
        dropdown.appendChild(option);
    });
}

document.getElementById("ProductButton").addEventListener("click", function() {
    const productInput = document.getElementById("ProductValue");
    const productValue = productInput.value.trim(); 

    if (productValue !== "") { 
        productList.push({ name: productValue, prices: [] }); 
        updateProductList(); 
        productInput.value = ""; 
    } else {
        alert("Please enter a product."); 
    }
});

document.getElementById("PriceButton").addEventListener("click", function() {
    const priceInput = document.getElementById("PriceValue");
    const priceValue = priceInput.value.trim(); 
    const selectedProductIndex = document.getElementById("DropDownPrice").selectedIndex;

    
    const digitRegex = /^\d+(\.\d+)?$/;

    if (priceValue !== "" && selectedProductIndex !== -1) { 
        
        if (digitRegex.test(priceValue)) {
            const selectedProduct = productList[selectedProductIndex];
            const productWithPrice = selectedProduct.name + " $" + priceValue + "/Unit"; 
            const dropdownCalculator = document.getElementById("DropDownCalculator");
            const option = document.createElement("option");
            option.textContent = productWithPrice;
            dropdownCalculator.appendChild(option);
            selectedProduct.prices.push(priceValue); 
            priceInput.value = ""; 
        } else {
            alert("Please enter only digits for the price."); 
        }
    } else {
        alert("Please select a product and enter a price."); 
    }
});

function addToDisplay(number) {
    var calculatorValueInput = document.getElementById("CalculatorValue");
    calculatorValueInput.value = number; 
}

// Add event listener to the TransactionButton
document.getElementById("TransactionButton").addEventListener("click", function() {
    resetValues();
    clearDynamicRows(); // Clear dynamically added rows
});

// Define a variable to keep track of the dynamically added rows
var dynamicRows = [];

// Function to add a row dynamically
function addDynamicRow(row) {
    dynamicRows.push(row);
}

// Function to clear all dynamically added rows
function clearDynamicRows() {
    dynamicRows.forEach(row => {
        row.innerHTML = ""; // Clear the row's content
    });
    dynamicRows = []; // Clear the array holding the rows
}

// Function to reset values
function resetValues() {
    document.getElementById("CalculatorValue").value = "";
    document.getElementById("DropDownCalculator").innerHTML = "";
    document.getElementById("AmountDue").innerHTML = "Amount Due: ";
    document.getElementById("Taxes").innerHTML = "Taxes: ";
    document.getElementById("TotalPrice").innerHTML = "Total Price: ";
}

//TABLE RECEIPT UPDATE
function addColumn() {
    const dropdown = document.getElementById("DropDownCalculator");
    const selectedIndex = dropdown.selectedIndex;
    const selectedOption = dropdown.options[selectedIndex];
    const selectedProduct = selectedOption.textContent.trim();

    // Extracting the product name
    const regexProductName = /\b(?!unit\b)[a-zA-Z]+\b/gi;
    const productNameMatch = selectedProduct.match(regexProductName);
    const productName = productNameMatch ? productNameMatch.join("") : null;

    // Extracting the unit price
    const regexUnitPrice = /\d+(\.\d+)?/;
    const unitPriceMatch = selectedProduct.match(regexUnitPrice);
    const unitPrice = unitPriceMatch ? unitPriceMatch[0] : null;

    // Get the unit value
    const unitValue = document.getElementById("CalculatorValue").value;
    if (unitValue.trim() === "") {
        alert("Please enter number of units");
    } else {

    // Clear the CalculatorValue input
    document.getElementById("CalculatorValue").value = ""; 

    // Inserting a new row into the table
    var table = document.getElementById("TABLE");
    var rowCount = table.rows.length;
    var newRow = table.insertRow(rowCount - 3); 

    // Inserting cells into the new row
    var productCell = newRow.insertCell(0);
    productCell.style.textAlign = "center";
    var unitPriceCell = newRow.insertCell(1);
    unitPriceCell.style.textAlign = "center";
    var unitsCell = newRow.insertCell(2);
    unitsCell.style.textAlign = "center";
    var totalPriceCell = newRow.insertCell(3);
    totalPriceCell.style.textAlign = "center";
    var newColumnCell = newRow.insertCell(4); 
    newColumnCell.style.textAlign = "center";

    // Setting the values for the cells
    productCell.innerHTML = productName;
    unitPriceCell.innerHTML = "$" + unitPrice;
    unitsCell.innerHTML = unitValue;
    totalPriceCell.innerHTML = "$" + (unitPrice * unitValue).toFixed(2);

    //Dynamic Rows to be added i.e. New rows
    addDynamicRow(newRow);
    }


    // Total Price
    var totalPriceSum = 0;
    var totalPriceCells = document.querySelectorAll("#TABLE td:nth-child(4)");
    totalPriceCells.forEach(cell => {
        var price = parseFloat(cell.innerHTML.replace("$", ""));
        totalPriceSum += price;
    });

    document.getElementById("TotalPrice").innerHTML = "Total Price: $" + totalPriceSum.toFixed(2);

    // Taxes
    var taxes = totalPriceSum * 5/100;
    document.getElementById("Taxes").innerHTML = "Taxes: $" + taxes.toFixed(2);

    // Amount Due
    document.getElementById("PayButton").addEventListener("click", function() {
        var amountDue = totalPriceSum + taxes;
document.getElementById("AmountDue").innerHTML = "Amount Due: $" + amountDue.toFixed(2);
});

};
   
function resetAmountDue() {
    document.getElementById("AmountDue").innerHTML = "Amount Due: ";
}
document.getElementById("CartButton").addEventListener("click", function() {
    resetAmountDue();
});





