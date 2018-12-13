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

function paypalPayment() {
    window.open("https://www.paypal.com/us/signin")
    alert("PayPal Payment Received!");
    paymentSelected();
}

function rewardsPayment() {
    alert("Rewards Points Payment Successful!")
    paymentSelected()
}


function paymentSelected() {
    let options = document.getElementsByClassName("radio_buttons");
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = "true";
    }
}

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

function validateCardInfo() {
    let missingInfo = "Missing Information:\n";
    let missing = false;
    if (document.getElementById("card_number").value.length != 16) {
        missingInfo += "Invalid Card Number\n";
        missing = true;
    }
    let ccMonth = document.getElementById("cc_month");
    if(ccMonth.options[ccMonth.selectedIndex].value == 0) {
        missingInfo += "No Expiration Month Entered\n";
        missing = true;

    }
    let ccYear = document.getElementById("cc_year");
    if(ccYear.options[ccYear.selectedIndex].value == 0) {
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