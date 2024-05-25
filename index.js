const hEL = document.getElementById("hours");
const minEL = document.getElementById("minutes");
const secEL = document.getElementById("seconds");
const ampmEL = document.getElementById("ampm");

function updatingclock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let amorpm = "AM";

    if (h > 12) {
        h = h - 12;
        amorpm = "PM";
    } else {
        amorpm = "AM";
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

    setTimeout(updatingclock, 1000)
}

updatingclock();
