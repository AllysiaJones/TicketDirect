/**
 * getWeekdayName function.
 * determines the day of the week based on the passed number
 * @param {int} number determined from date object
 * @return {string} day of the week
 */
function getWeekdayName(number) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[number];
}

/**
 * getMonthName function.
 * determines the month based on the passed number
 * @param {int} number determined from date object
 * @return {string} current month
 */
function getMonthName(number) {
    let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return months[number];
}

/**
 * initialSet function.
 * determines if the movie is a pre-sale movie or not
 * if it is, display premier day on movieinfo.html
 * if not, display this weeks movie dates using a date object on movieinfo.html
 * @param {boolean} preSale 
 */
function initialSetUp(preSale) {
    let dayBox = document.getElementsByClassName("day");
    let num = 0;
    if (!preSale) {
        for (let i = 0; i < dayBox.length; i++) {
            let currentDay = new Date();
            currentDay.setDate(currentDay.getDate() + num);
            num++;
            month = currentDay.getMonth();
            day = currentDay.getDate();
            dayOfWeek = currentDay.getDay();
            let weekday = dayBox[i].getElementsByClassName("weekday")[0];
            let date = dayBox[i].getElementsByClassName("date")[0];
            date.innerHTML = getMonthName(month) + " " + day;
            if (i == 0) {
                weekday.innerHTML = "Today";
                localStorage.setItem("movieDate", date.innerHTML);
                disableTimes();
            }
            else {
                weekday.innerHTML = getWeekdayName(dayOfWeek);
            }
        }
    }
    else {
        for (let i = 0; i < dayBox.length; i++) {
            let weekday = dayBox[i].getElementsByClassName("weekday")[0];
            let date = dayBox[i].getElementsByClassName("date")[0];
            if (i == 0) {
                weekday.innerHTML = "Premiere Day"
                date.innerHTML = getPreSaleDate("movie_selection");
                getDate(i);
                enableAllTimes();
            }
            else {
                dayBox[i].style.display = "none";
            }
        }
    }
}

/**
 * getDate function.
 * gets and locally stores the date that the user selected 
 * calls disableTimes or enableAllTimes based of if selected is today's date 
 * calls display selected
 * @param {string} index position of the day box within the calender
 */
function getDate(index) {
    let date = document.getElementsByClassName("date");
    localStorage.setItem("movieDate", date[parseInt(index)].innerHTML);
    if (index == 0) {
        disableTimes();
    }
    else {
        enableAllTimes();
    }
    displaySelected(index);
}

/**
 * disableTimes function.
 * gets the current time and compares it to the converted movie times
 * if the movie time has passed, disabled the button
 */
function disableTimes() {
    let currentDay = new Date();
    let currentHour = currentDay.getHours();
    let currentMin = currentDay.getMinutes();
    let times = document.getElementsByClassName("movie_times");
    if (currentMin < 10) {
        currentMin = "0" + currentMin;
    }
    if (currentHour < 10) {
        currentHour = "0" + currentHour;
    }
    let currentTime = currentHour + ":" + currentMin;
    for (let i = 0; i < times.length; i++) {
        let militaryTime = convertTime(times[i].innerHTML)
        if (militaryTime < currentTime) {
            times[i].disabled = true;
            times[i].classList.add("time_disabled");
        }
    }
}

/**
 * enableAllTimes function.
 * gets all the movie times and enables it button
 */
function enableAllTimes() {
    let times = document.getElementsByClassName("movie_times");
    for (let i = 0; i < times.length; i++) {
        if (times[i].disabled) {
            times[i].disabled = false;
            times[i].classList.remove("time_disabled");
        }
    }
}

/**
 * convertTime function.
 * converts the movie time to the same format of the current time
 * so that it cam correctly compare the times 
 * @param {string} time movie time to be reformatted
 * @return {string} the correctly formatted movie time
 */
function convertTime(time) {
    let hour = time.substring(0, time.indexOf(":"));
    let min = time.substring(time.indexOf(":") + 1, time.indexOf(" "));
    if (time.includes("am")) {
        if (hour == "12") {
            hour = "00";
        }
        else if (hour < "10") {
            hour = "0" + hour;
        }
    }
    else {
        if (hour != "12") {
            hour = parseInt(hour) + 12;
        }
    }
    return hour + ":" + min;
}

/**
 * displaySelected function.
 * displays styling on the selected date so that the user
 * can see which one he has chosen
 * @param {int} index position of the selected date
 */
function displaySelected(index) {
    let days = document.getElementsByClassName("day");
    for (let i = 0; i < days.length; i++) {
        let weekday = days[i].getElementsByClassName("weekday")[0];
        if (weekday.classList.contains("selected_day") & index != i) {
            weekday.classList.remove("selected_day");
        }
        else if (!weekday.classList.contains("selected_day") & index == i) {
            weekday.classList.add("selected_day");
        }
    }
}

/**
 * getTheater function.
 * gets the user's selected theater from the drop down menu on movieinfo.html
 * displays and locally stores the selected movie theater
 * displays the movie times
 */
function getTheater() {
    let dropDown = document.getElementById("theater");
    let theaterChoice = dropDown.options[dropDown.selectedIndex].innerHTML;
    let theaterName = document.getElementById("theater_name");
    theaterName.innerHTML = theaterChoice;
    localStorage.setItem("theater", theaterChoice);
    document.getElementsByClassName("movie_display")[0].classList.remove("hidden");
}

/**
 * getMovieTime function.
 * gets and locally stores the user's selected movie time based on the position of the button
 * @param {string} index position of the movie time button
 */
function getMovieTime(index) {
    let times = document.getElementsByClassName("movie_times");
    localStorage.setItem("movieTime", times[parseInt(index)].innerHTML);
}