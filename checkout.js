/**
 * displayPayment function.
 * gets the type of payment that the user selected 
 * displays the info that corresponds with the payment type
 * @param {string} paymentId 
 */
function displayPayment(paymentId) {
    if (paymentId == "card_option") {
        let ccInfo = document.getElementById("cc_info");
        ccInfo.classList.remove("hidden");
        ccInfo.classList.add("card_payment_display")
        ccInfo.style.border = "none";
    }
    else {
        let ccInfo = document.getElementById("cc_info");
        ccInfo.classList.remove("card_payment_display");
        ccInfo.classList.add("hidden")
    }
    if (paymentId == "paypal_option") {
        document.getElementById("paypal_button").classList.remove("hidden");
    }
    else {
        document.getElementById("paypal_button").classList.add("hidden");
    }
    if (paymentId == "rewards_option") {
        document.getElementById("rewards_button").classList.remove("hidden");
    }
    else {
        document.getElementById("rewards_button").classList.add("hidden");
    }
}

/**
 * paypalPayment function.
 * opens the paypal sign in website on a new tab
 * alerts the user that the payment went through
 * calls paymentSelected
 */
function paypalPayment() {
    window.open("https://www.paypal.com/us/signin")
    alert("PayPal Payment Received!");
    paymentSelected();
}

/**
 * rewardsPayment function.
 * alerts the user that the payment went through
 * calls paymentSelected
 */
function rewardsPayment() {
    alert("Rewards Points Payment Successful!")
    paymentSelected()
}

/**
 * paymentSelected function.
 * once a payment type is chosen by the user, disable the radio buttons
 */
function paymentSelected() {
    let options = document.getElementsByClassName("radio_buttons");
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = "true";
    }
}

/**
 * completePurchase function.
 * checks if user selected a payment type and completed the form if type is credit card
 * calls successfulPayment if user correctly selected a payment
 * if not, informs user that no payment has been selected
 * @param {*} checkoutButton 
 */
function completePurchase(checkoutButton) {
    let options = document.getElementsByClassName("radio_buttons");
    let selectedPayment = false;
    let selectedIndex = -1;
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedIndex = i;
            selectedPayment = true;
        }
    }
    if (selectedPayment) {
        if (selectedIndex == 0) {
            if (validateCardInfo()) {
                successfulPayment(selectedIndex);
            }
        }
        else {
            successfulPayment(selectedIndex);
        }
    }
    else {
        let paymentText = document.getElementById("no_payment");
        paymentText.innerHTML = "A Payment Type Has Not Been Selected";
        paymentText.style.color = "red";
    }
}

/**
 * validateCardInfo function.
 * if card payment is selected, checks if card form info is completed correctly
 * alerts user which information is missing or incorrect
 * @return {boolean} true: if information was entered correctly
 * @return {boolean} false: if information was not entered correctly
 */
function validateCardInfo() {
    let missingInfo = "Missing Information:\n";
    let missing = false;
    if (document.getElementById("card_number").value.length != 16) {
        missingInfo += "Invalid Card Number\n";
        missing = true;
    }
    let ccMonth = document.getElementById("cc_month");
    if (ccMonth.options[ccMonth.selectedIndex].value == 0) {
        missingInfo += "No Expiration Month Entered\n";
        missing = true;

    }
    let ccYear = document.getElementById("cc_year");
    if (ccYear.options[ccYear.selectedIndex].value == 0) {
        missingInfo += "No Expiration Year Entered\n"
        missing = true;
    }
    if (document.getElementById("first_name").value.length == 0) {
        missingInfo += "No First Name Entered\n";
        missing = true;
    }
    if (document.getElementById("last_name").value.length == 0) {
        missingInfo += "No Last Name Entered\n";
        missing = true;
    }
    if (document.getElementById("billing_zip").value.length != 5) {
        missingInfo += "Invalid Zip Code";
        missing = true;
    }
    if (missing) {
        alert(missingInfo);
        return false;
    }
    else {
        return true;
    }
}

/**
 * successfulPayment function.
 * when the user is signed in, go to signup.html page and show their account info
 * when the user is not signed in, alert user of completed purchase and go to index.html
 * when the user is signed in and chooses the card or paypal payments, add rewards
 * @param {int} selectedIndex index of selected payment
 */
function successfulPayment(selectedIndex) {
    if (localStorage.getItem("signedIn") == "true") {
        if (selectedIndex != 2) {
            localStorage.setItem("rewards", (parseInt(localStorage.getItem("totalPurchase")) * 5))
        }
        else {
            localStorage.setItem("rewards", "0");
        }
        document.getElementById("checkout_button").setAttribute("href", "./signup.html");
    }
    else {
        alert("Movie Tickets Have Been Purchased!");
        document.getElementById("checkout_button").setAttribute("href", "./index.html")
    }
}