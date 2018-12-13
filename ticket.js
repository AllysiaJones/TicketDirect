/**
 * TicketInfo Parameterized Constructor.
 * Creates a TicketInfo object for Ticket Direct's 3 movie ticket types
 * @param {string} type 
 * @param {float} price 
 * @param {int} amount the amount of the ticket type that the user selects
 * @param {float} subtotal the subtotal of the ticket type
 */function TicketInfo(type, price, amount, subtotal) {
    this.type = type;
    this.price = price;
    this.amount = amount;
    this.subtotal = subtotal;
}

let adultTicket = new TicketInfo("adult", 11.85);
let childTicket = new TicketInfo("child", 8.55);
let seniorTicket = new TicketInfo("senior", 8.55);

const ticketTypes = [adultTicket, childTicket, seniorTicket];

// used for checkout page
let feeAmount = 1.50;

/**
 * displayPrice function.
 * displays the TicketInfo's price property for each ticket type on ticket.html and checkout.html
 */
function displayPrice() {
    let prices = document.getElementsByClassName("price");
    for (let i = 0; i < prices.length; i++) {
        prices[i].innerHTML = ticketTypes[i].price;
    }
}

/**
 * getTicketAmount function. 
 * gets the drop down menu's value for the selected type on ticket.html
 * calls the setEachSubtotal function
 * @param {string} ticketType type of the ticket
 */
function getTicketAmount(ticketType) {
    let tickets = document.getElementsByClassName("ticket_amount");
    let ticketChoice = tickets[getTicketType(ticketType)];
    let ticketAmount = ticketChoice.options[ticketChoice.selectedIndex].value;
    setSubtotal(ticketType, ticketAmount);
}

/**
 * setSubtotal function.
 * gets the ticket type and ticket amount and computes the subtotal 
 * assigns the subtotal to the subtotal property and display the subtotal on checkout.html
 * @param {string} ticketType 
 * @param {string} ticketAmount 
 */
function setSubtotal(ticketType, ticketAmount) {
    let subtotalText = document.getElementsByClassName("subtotal");
    for (let i = 0; i < ticketTypes.length; i++) {
        let subtotal = parseInt(ticketAmount) * parseFloat(ticketTypes[i].price);
        if (ticketType == ticketTypes[i].type) {
            ticketTypes[i].subtotal = (parseFloat(ticketTypes[i].price) * parseInt(ticketTypes[i].amount)).toFixed(2);
            subtotalText[i].innerHTML = subtotal.toFixed(2);
        }
    }
}

/**
 * getTicketType function.
 * gets the ticket type, finds the type in the TicketInfo array,
 * and returns the index with that type
 * @param {string} ticketType 
 */
function getTicketType(ticketType) {
    for (let i = 0; i < ticketTypes.length; i++) {
        if (ticketTypes[i].type == ticketType)
            return i;
    }
}

/**
 * storeTickets function.
 * when the user is done selecting their ticket amounts and clicks the continue button on ticket.html:
 * determines if the user has selected an amount > 0, if nothing is selected, user is told through text on the page
 * if amount if selected, stores the amount in the amount property and calls getSubtotal and getTotalAmount
 */
function storeTickets() {
    let tickets = document.getElementsByClassName("ticket_amount");
    let selectedTickets = false;
    for (let i = 0; i < ticketTypes.length; i++) {
        let ticketChoice = tickets[i];
        let ticketAmount = ticketChoice.options[ticketChoice.selectedIndex].value;
        if (ticketAmount != "0") {
            selectedTickets = true;
        }
        ticketTypes[i].amount = parseInt(ticketAmount);
        tickets[i].selectedIndex = 0;
    }
    if (selectedTickets) {
        getSubtotal();
        getTotalAmount();
        document.getElementById("seat_button").setAttribute("href", "./seat.html");
    }
    else {
        document.getElementById("no_tickets_selected").innerHTML = "Please Select Your Tickets";
    }
}

/**
 * getSubtotal function.
 * computes the subtotal of each ticket type 
 * computes and locally stores the total of all three subtotals
 */
function getSubtotal() {
    let subtotal = 0;
    for (let i = 0; i < ticketTypes.length; i++) {
        ticketTypes[i].subtotal = (parseFloat(ticketTypes[i].price) * parseInt(ticketTypes[i].amount)).toFixed(2);
        subtotal += parseFloat(ticketTypes[i].subtotal);
    }
    localStorage.setItem("subtotal", subtotal.toFixed(2));
}

/**
 * getTotalAmount function.
 * locally stores each ticket type's amount of tickets
 * computes and locally stores the total amount of tickets that the user wants to purchase
 */
function getTotalAmount() {
    let total = 0;
    for (let i = 0; i < ticketTypes.length; i++) {
        localStorage.setItem(ticketTypes[i].type + "Amount", ticketTypes[i].amount);
        total += ticketTypes[i].amount;
    }
    localStorage.setItem("amountOfTickets", total);
}

/**
 * getTotalFees function.
 * displays the fee per ticket
 * computes, displays on checkout.html, and locally stores the total fees of the tickets
 * @param {string} totalAmount 
 */
function getTotalFees(totalAmount) {
    document.getElementById("fee").innerHTML = feeAmount.toFixed(2);
    let totalFees = (feeAmount * parseInt(totalAmount)).toFixed(2);
    document.getElementById("total_fees").innerHTML = totalFees;
    localStorage.setItem("totalFees", totalFees);
}

/**
 * getTotalPurchase function.
 * computes, displays on checkout.html, and locally stores the total purchase cost of the user's movie tickets
 */
function getTotalPurchase() {
    let total = (parseFloat(localStorage.getItem("subtotal")) + parseFloat(localStorage.getItem("totalFees"))).toFixed(2);
    document.getElementById("total").innerHTML = total;
    localStorage.setItem("totalPurchase", total);
}