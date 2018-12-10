function TicketInfo(type, price, amount, subtotal) {
    this.type = type;
    this.price = price;
    this.amount = amount;
    this.subtotal = subtotal;
}

let adultTicket = new TicketInfo("adult", 11.85);
let childTicket = new TicketInfo("child", 8.55);
let seniorTicket = new TicketInfo("senior", 8.55);

const ticketTypes = [adultTicket, childTicket, seniorTicket];

function setPrice() {
    let tickets = document.getElementsByClassName("ticket_amount");
    let prices = document.getElementsByClassName("price");
    for (let i = 0; i < tickets.length; i++) {
        prices[i].innerHTML = ticketTypes[i].price;
    }
}

function getTicketAmount(ticketType) {
    let tickets = document.getElementsByClassName("ticket_amount");
    let ticketChoice = tickets[getTicketType(ticketType)];
    let ticketAmount = ticketChoice.options[ticketChoice.selectedIndex].value;
    let subtotal = setSubtotal(ticketType, ticketAmount);
}

function setSubtotal(ticketType, ticketAmount) {
    for (let i = 0; i < ticketTypes.length; i++) {
        if (ticketType == ticketTypes[i].type) {
            let subtotal = parseInt(ticketAmount) * parseFloat(ticketTypes[i].price);
            ticketTypes[i].subtotal = (parseFloat(ticketTypes[i].price) * parseInt(ticketTypes[i].amount)).toFixed(2);
            let subtotalText = document.getElementsByClassName("subtotal");
            subtotalText[i].innerHTML = subtotal.toFixed(2);
        }
    }
}

function getTicketType(ticketType) {
    if (ticketType == "adult") {
        return 0;
    }
    else if (ticketType == "child") {
        return 1;
    }
    else {
        return 2;
    }
}

function storeTickets() {
    let tickets = document.getElementsByClassName("ticket_amount");
    for (let i = 0; i < ticketTypes.length; i++) {
        let ticketChoice = tickets[i];
        let ticketAmount = ticketChoice.options[ticketChoice.selectedIndex].value;
        ticketTypes[i].amount = parseInt(ticketAmount);
        tickets[i].selectedIndex = 0;
    }
    getSubtotal()
    getTotalAmount()
    document.getElementById("seat_button").setAttribute("href", "./seat.html");
}

function getSubtotal() {
    let subtotal = 0;
    for (let i = 0; i < ticketTypes.length; i++) {
        ticketTypes[i].subtotal = (parseFloat(ticketTypes[i].price) * parseInt(ticketTypes[i].amount)).toFixed(2);
        subtotal += parseFloat(ticketTypes[i].subtotal);
    }
    localStorage.setItem("subtotal", subtotal.toFixed(2));
}

function getTotalAmount() {
    let total = 0;
    for (let i = 0; i < ticketTypes.length; i++) {
        total += ticketTypes[i].amount;
    }
    localStorage.setItem("amountOfTickets", total);
}
