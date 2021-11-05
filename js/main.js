// Make Countdown
let countdown = setInterval(() => {
    const countDate = new Date("November 30, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    // Define Time units
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    //  Calculate
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    // Replace
    document.querySelector(".days").innerText = textDay < 10 ? `0${textDay}` : textDay;
    document.querySelector(".hours").innerText = textHour < 10 ? `0${textHour}` : textHour;
    document.querySelector(".minutes").innerText = textMinute < 10 ? `0${textMinute}` : textMinute;
    document.querySelector(".seconds").innerText = textSecond < 10 ? `0${textSecond}` : textSecond;

    if(gap < 0) {
        clearInterval(countdown);
    }
}, 1000);


let section = document.querySelector(".our-skills");
let progSpans = document.querySelectorAll(".the-progress span");

let number = document.querySelectorAll(".number");
let numSection = document.querySelector(".stats");
let on = false;

window.onscroll = function () {
    // Animate width on scrolling (Skills Section)
    if(window.scrollY >= section.offsetTop - 300) {
        progSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    // Increase numbers on scrolling
    if(window.scrollY >= numSection.offsetTop - 300) {
        if(!on) {
            number.forEach((el) => increaseNums(el));
        }
        on = true;
    }
}

function increaseNums(num) {
    let goal = num.dataset.goal;
    let counter = setInterval(() => {
        num.textContent++;
        if(num.textContent == goal) {
            clearInterval(counter);
        }
    }, 1500 / goal);
}
