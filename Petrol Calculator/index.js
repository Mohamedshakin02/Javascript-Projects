//Created a function named calculate()
function calculate() {
    var price_per_litre = parseFloat(document.getElementById('Petrol_Price').value);
    var litres = parseFloat(document.getElementById('liters').value);
    var totalAmountElement = document.getElementById('total_Amount');

    // Check for negative values or non-numbers
    if (price_per_litre < 0 || litres < 0 || isNaN(price_per_litre) || isNaN(litres)) {
        totalAmountElement.innerHTML = "Invalid input"; 
        return;  
    }

    // Calculate total price
    var total_price = price_per_litre * litres;
    totalAmountElement.innerHTML = "AED " + total_price.toFixed(2); 
}