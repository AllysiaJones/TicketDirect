let seats = [];

function toggleSeat(seatId) {
    let seat = document.getElementById(seatId);
    if (seat.innerHTML == seatId) {
        seat.innerHTML = "";
        seat.style.backgroundColor = "#f9c72f";
        seat.style.color = "#1F2328";
        removeSeat(seatId);
    }
    else {
        seat.innerHTML = seatId;
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
        selectedSeats += seats[i];
        if(seats.length > 1  & i != seats.length-1) {
            selectedSeats += ", ";
        }
        else {
            selectedSeats += " ";
        }
    }
    document.getElementById("selected_seats").innerHTML = selectedSeats;
}


// localStorage.setItem("amountOfTickets", 4);

// function checkSeatAmount() {
//     let amountOfTickets = localStorage.getItem("amountOfTickets");
//     if(amountOfTickets == seats.length) {
//         alert("correct amount");
//         //link if correct
//     }
//     else if (amountOfTickets > seats.length) {
//         document.getElementById("wrong_amount").innerHTML = "Please Choose " + seats.length - amountOfTickets + " more tickets."
//         alert("Please choose " + (seats.length - amountOfTickets) + " more ticket(s).")
//     }
//     else if (amountOfTickets > seats.length) {
//         alert("Please choose " + (amountOfTickets - seats.length) + " less ticket(s).")
//     }

// }

