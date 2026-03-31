function display() {
let newyorkElement = document.querySelector("#new-york");
if (newyorkElement) {
let newyorkDateElement = newyorkElement.querySelector(".date");
let newyorkTimeElement = newyorkElement.querySelector(".time");
newyorkDateElement.innerHTML = moment().tz("America/New_York").format("MMMM Do YYYY");
newyorkTimeElement.innerHTML = moment().tz("America/New_York").format("h:mm:ss [<small>]A[</small>]");
}

let seoulElement = document.querySelector("#seoul");
if (seoulElement) {
let seoulDateElement = seoulElement.querySelector(".date");
let seoulTimeElement = seoulElement.querySelector(".time");
seoulDateElement.innerHTML = moment().tz("Asia/Seoul").format("MMMM Do YYYY");
seoulTimeElement.innerHTML = moment().tz("Asia/Seoul").format("h:mm:ss [<small>]A[</small>]");
}
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities")
    citiesElement.innerHTML = `
    <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
    `
}

let citySelectElement = document.querySelector("#city");

citySelectElement.addEventListener("change", updateCity);

setInterval(display);