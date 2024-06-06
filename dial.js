const ampmEL = document.getElementById("ampm");
const citySelect = document.getElementById("city-selection");
const localTimezoneOffset = -new Date().getTimezoneOffset() / 60;

citySelect.addEventListener('mousedown', function (event) {
    if (event.target.tagName == 'SELECT') {
        event.preventDefault;
        citySelect.size = 5;
    }

});

citySelect.addEventListener('click', function (event) {
    if (event.target.tagName == 'OPTION') {
        updatingclock();
        citySelect.size = 1;
    }
});



updatingclock();

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
    ampmEL.innerText = amorpm;

    const secondHand = document.getElementById("secz");
    const minuteHand = document.getElementById("minz");
    const hourHand = document.getElementById("hourz");

    const secondDegree = ((s / 60) * 360) + 90;
    const minuteDegree = ((m / 60) * 360) + ((s / 60) * 6) + 90;
    const hourDegree = ((h / 12) * 360) + ((m / 60) * 30) + 90;

    if (s == 0) {
        secondHand.style.transition = 'none';
    }

    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    setTimeout(updatingclock, 1000);
}





