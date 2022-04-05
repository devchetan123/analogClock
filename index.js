let hoursdiv = document.querySelector(".hrline")
let minsdiv = document.querySelector(".minline")
let secsdiv = document.querySelector(".secline")



setInterval(() => {

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let hrRotation = 30 * hours + minutes / 2;
    let minRotation = 6 * minutes;
    let secRotaion = 6 * seconds;

    hoursdiv.style.transform = `rotate(${hrRotation}deg)`
    minsdiv.style.transform = `rotate(${minRotation}deg)`
    secsdiv.style.transform = `rotate(${secRotaion}deg)`

}, 1000)