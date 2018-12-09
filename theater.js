function getWeekdayName(number) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[number];
}

function getMonthName(number) {
    let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return months[number];
}

function getNextWeek() {
    let newDate = new Date();
    newDate.setDate(newDate.getDate() + num);
    let day = newDate.getDate();
    let month = newDate.getMonth();
    let dayOfWeek = newDate.getDay();
    let dayBox = document.getElementsByClassName("day");

    for (let i = 0; i < dayBox.length; i++) {
        let weekday = dayBox[i].getElementsByClassName("weekday")[0];
        let date = dayBox[i].getElementsByClassName("date")[0];
        alert(weekday.innerHTML);
        dayBox[i].style.color = "blue";
        weekday.innerHTML = getWeekdayName(dayOfWeek);
        date.innerHTML = getMonthName(month) + " " + day;

        let nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + num);
        month = nextDay.getMonth();
        day = nextDay.getDate();
        dayOfWeek = nextDay.getDay();
        num++;
    }
}

function initialSetUp() {
    let dayBox = document.getElementsByClassName("day");
    let num = 0;

    for (let i = 0; i < dayBox.length; i++) {
        let nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + num);
        num++;
        month = nextDay.getMonth();
        day = nextDay.getDate();
        dayOfWeek = nextDay.getDay();

        let weekday = dayBox[i].getElementsByClassName("weekday")[0];
        let date = dayBox[i].getElementsByClassName("date")[0];

        if (i == 0) {
            weekday.innerHTML = "Today";
        }
        else {
            weekday.innerHTML = getWeekdayName(dayOfWeek);
        }
        date.innerHTML = getMonthName(month) + " " + day;
    }
}

function getDate(index) {
    let date = document.getElementsByClassName("date");
    localStorage.setItem("movieDate", date[parseInt(index)].innerHTML);
    alert(localStorage.getItem("movieDate"));
}

function getTheater() {
    let dropDown = document.getElementById("theater");
    let theaterChoice = dropDown.options[dropDown.selectedIndex].innerHTML;
    let theaterName = document.getElementById("theater_name");
    theaterName.innerHTML = theaterChoice;
    localStorage.setItem("theater", theaterChoice);
}

function getMovieTime(index) {
    let times = document.getElementsByClassName("movie_times");
    localStorage.setItem("movieTime", times[parseInt(index)].innerHTML);
}

initialSetUp();
getPoster();



// if (localStorage.getItem('hasRunBefore') === null) {
//     initialSetUp();
//     localStorage.setItem('hasRunBefore', "yes");
// }


// function deleteStorage() {
//     localStorage.setItem('hasRunBefore', null);
// }