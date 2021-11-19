// MENU HAMBURGER AND X TOGGLE
document.querySelector('.menubtn').addEventListener('click', function () {

    document.querySelector('.animated-menu').classList.toggle('open');
});


// lazyLoad
document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages = document.querySelectorAll("img.lazy");
    var lazyloadThrottleTimeout;

    function lazyload() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
                if (img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
            });
            if (lazyloadImages.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});

//countdown
var countDownDate = new Date("April 30, 2022").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + " days until we say";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Today is the day!";
    }
}, 1000);


// TABS
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tabcontent");

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {
        for (let j = 0; j < contents.length; j++) {
            contents[j].classList.remove("content--active");
        }
        for (let jj = 0; jj < tabs.length; jj++) {
            tabs[jj].classList.remove("tabs--active");
        }
        contents[i].classList.add("content--active");
        tabs[i].classList.add("tabs--active");
    });
}

