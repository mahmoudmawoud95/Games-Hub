function validateForm() {
    var cardNumber = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;

    var cardNumberError = document.getElementById("cardNumberError");
    var expiryDateError = document.getElementById("expiryDateError");
    var cvvError = document.getElementById("cvvError");

    var isValid = true;
    if (!/^\d{16}$/.test(cardNumber)) {
        cardNumberError.innerHTML = "Invalid card number (must be 16 digits)";
        isValid = false;
    } else {
        cardNumberError.innerHTML = "";
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        expiryDateError.innerHTML = "Invalid expiry date (must be MM/YY)";
        isValid = false;
    } else {
        expiryDateError.innerHTML = "";
    }

    if (!/^\d{3}$/.test(cvv)) {
        cvvError.innerHTML = "Invalid CVV (must be 3 digits)";
        isValid = false;
    } else {
        cvvError.innerHTML = "";
    }

    return isValid;
}