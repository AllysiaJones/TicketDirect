let seats = [];

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

function addSeat(seatName) {
    seats.push(seatName);
    displaySeats()
}

function removeSeat(seatName) {
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] == seatName) {
            seats.splice(i, 1);
        }
    }
    displaySeats()
}

function displaySeats() {
    let selectedSeats = "";
    seats = seats.sort();
    for (let i = 0; i < seats.length; i++) {
        if(seats[i][1] == 0){
            selectedSeats += trimSeat(seats[i]);
        }
        else {
            selectedSeats += seats[i];
        }
        if(seats.length > 1  & i != seats.length-1) {
            selectedSeats += ", ";
        }
        else {
            selectedSeats += " ";
        }
    }
    document.getElementById("selected_seats").innerHTML = selectedSeats;
}

function trimSeat(seatId) {
    if(seatId[1] == 0){
        return seatId[0] + seatId[2];
    }
    else    
        return seatId;
}

// localStorage.setItem("amountOfTickets", 4);

function checkSeatAmount() {
    let amountOfTickets = localStorage.getItem("amountOfTickets");
    if(amountOfTickets == seats.length) {
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

