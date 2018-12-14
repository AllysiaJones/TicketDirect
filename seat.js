// array for user's selected seats
let seats = [];

/**
 * toggleSeat function.
 * toggles between when user selects and deselects a seat and adds styling for each
 * when seat is selected, calls addSeat
 * when seat is deselected, calls removeSeat
 * @param {string} seatId 
 */
function toggleSeat(seatId) {
    let seat = document.getElementById(seatId);
    if (seat.innerHTML == trimSeat(seatId)) {
        seat.innerHTML = "";
        seat.style.backgroundColor = "#f9c72f";
        seat.style.color = "#1F2328";
        removeSeat(seatId);
    }
    else {
        seat.innerHTML = trimSeat(seatId);
        seat.style.backgroundColor = "#1F2328";
        seat.style.color = "#ccc";
        addSeat(seatId);
    }
}

/**
 * addSeat function.
 * pushes the selected seat to the array
 * calls displaySeats
 * @param {string} seatName 
 */
function addSeat(seatName) {
    seats.push(seatName);
    displaySeats()
}

/**
 * removeSeat function.
 * removes the deselected seat from the array
 * calls displaySeats
 * @param {string} seatName 
 */
function removeSeat(seatName) {
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] == seatName) {
            seats.splice(i, 1);
        }
    }
    displaySeats()
}

/**
 * displaySeats function.
 * creates a string of the sorted selected seats
 * calls trimSeat if the seat id is 01-09
 * displays and locally stores the selected seats
 */
function displaySeats() {
    let selectedSeats = "";
    seats = seats.sort();
    for (let i = 0; i < seats.length; i++) {
        if (seats[i][1] == "0") {
            selectedSeats += trimSeat(seats[i]);
        }
        else {
            selectedSeats += seats[i];
        }
        if (seats.length > 1 & i != seats.length - 1) {
            selectedSeats += ", ";
        }
        else {
            selectedSeats += " ";
        }
    }
    document.getElementById("selected_seats").innerHTML = selectedSeats;
    localStorage.setItem("selectedSeats", selectedSeats);
}

/**
 * trimSeat function.
 * gets the seatId of the selected seat 
 * trims the 0 from the seat for display
 * @param {string} seatId 
 * @return {string} reformatted seat id
 */
function trimSeat(seatId) {
    if(seatId[1] == 0){
        return seatId[0] + seatId[2];
    }
    else    
        return seatId;
}

/**
 * checkSeatAmount function.
 * gets the total amount of tickets that the user selected
 * informs the user if the amount of seats they selected is not enough or too much
 * if same amount, go to checkout.html
 */
function checkSeatAmount() {
    let amountOfTickets = localStorage.getItem("amountOfTickets");
    if (amountOfTickets == seats.length) {
        document.getElementById("checkout_button").setAttribute("href", "./checkout.html");
    }
    else if (amountOfTickets > seats.length) {
        let newText = document.getElementById("wrong_amount");
        newText.innerHTML = "Please Choose " + (amountOfTickets - seats.length) + " More Ticket(s)."
        newText.style.color = "red";
    }
    else if (amountOfTickets < seats.length) {
        let newText = document.getElementById("wrong_amount");
        newText.innerHTML = "Please Choose " + (seats.length - amountOfTickets) + " Less Ticket(s)."
        newText.style.color = "red";
    }
}