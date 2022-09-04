var toggle = document.getElementById("darkmode");
var memoji = document.getElementById("memoji");
var body = document.body;
var iconshf = document.getElementsByClassName("fahf");
var iconsw = document.getElementsByClassName("faw");
var workstitles = document.getElementsByClassName("tl");

function darkmode() {
    if (toggle.textContent == "Dark mode") {
        memoji.setAttribute("src", "./media/memojisleep.png");
        body.classList.toggle("dark-mode");

        for (let i = 0; i < iconshf.length; i++) {
            iconshf[i].classList.toggle("dark-mode");
        }

        for (let i = 0; i < iconsw.length; i++) {
            iconsw[i].classList.toggle("dark-mode-faw");
        }

        for (let i = 0; i < workstitles.length; i++) {
            workstitles[i].classList.toggle("dark-mode-titles");
            workstitles[i].classList.toggle("titlelink");
        }

        toggle.classList.toggle("dark-mode-toggle");
        toggle.classList.toggle("darkmodetext");
        toggle.classList.toggle("link");
        toggle.innerHTML = "Light mode";
    } else {
        memoji.setAttribute("src", "./media/memoji.png");
        body.classList.toggle("dark-mode");

        for (let i = 0; i < iconshf.length; i++) {
            iconshf[i].classList.toggle("dark-mode");
        }

        for (let i = 0; i < iconsw.length; i++) {
            iconsw[i].classList.toggle("dark-mode-faw");
        }

        for (let i = 0; i < workstitles.length; i++) {
            workstitles[i].classList.toggle("dark-mode-titles");
            workstitles[i].classList.toggle("titlelink");
        }

        toggle.classList.toggle("dark-mode-toggle");
        toggle.classList.toggle("darkmodetext");
        toggle.classList.toggle("link");
        toggle.innerHTML = "Dark mode";
    }
}
