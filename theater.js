// let theater = document.getElementById("theater").value;

let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
const todaysWeekDay = today.getDay();
let dayOfWeek = todaysWeekDay;

let dayBox = document.getElementsByClassName("day");


for (let i = 0; i < dayBox.length; i++) {
    let weekday = dayBox[i].getElementsByClassName("weekday")[0];
    let date = dayBox[i].getElementsByClassName("date")[0];
    if (dayOfWeek == 7) {
        dayOfWeek = 0;
    }
    weekday.innerHTML = getWeekdayName(dayOfWeek);
    date.innerHTML = getMonthName(month) + " " + day;
    dayOfWeek++;
    day =
}

function getWeekdayName(number) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[number];
}

function getMonthName(number) {
    let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return months[number];
}