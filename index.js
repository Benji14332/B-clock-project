const hEL = document.getElementById("hours");
const minEL = document.getElementById("minutes");
const secEL = document.getElementById("seconds");
const ampmEL = document.getElementById("ampm");
const citySelect = document.getElementById("city-selection");
const localTimezoneOffset = -new Date().getTimezoneOffset() / 60;

citySelect.addEventListener('mousedown', function (event) {
    event.preventDefault;
    citySelect.size = 5;
});

citySelect.addEventListener('change', function () {
    updatingclock;
    citySelect.size = 1;

});

function updatingclock() {
    let timezoneOffset;
    if (citySelect.value === "local") {
        timezoneOffset = localTimezoneOffset;
    } else {
        timezoneOffset = parseFloat(citySelect.value);
    }


    let currentTime = new Date();
    let utcTime = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60000);
    let localTime = new Date(utcTime + (timezoneOffset * 3600000));

    let h = localTime.getHours();
    let m = localTime.getMinutes();
    let s = localTime.getSeconds();

    let amorpm = "AM";

    if (h >= 12) {
        if (h > 12) h = h - 12;
        amorpm = "PM";
    } else {
        amorpm = "AM";
    }

    if (h == 0) {
        h = 12;
    }

    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }

    hEL.innerText = h;
    minEL.innerText = m;
    secEL.innerText = s;
    ampmEL.innerText = amorpm;

    setTimeout(updatingclock, 1000);
}

updatingclock();

