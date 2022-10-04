const darkModeButton = document.getElementById("darkmode");
const memoji = document.getElementById("memoji");
const useDark = window.matchMedia("(prefers-color-scheme: dark)");

function darkModeSwitcher() {
    if (document.documentElement.classList.contains("dark-mode")) {
        memoji.setAttribute("src", "./media/memoji.png");
        document.documentElement.classList.toggle("dark-mode");
        darkModeButton.innerHTML = "Dark Mode";
    } else {
        memoji.setAttribute("src", "./media/memojisleep.png");
        document.documentElement.classList.toggle("dark-mode");
        darkModeButton.innerHTML = "Light Mode";
    }
}

function toggleDarkMode(state) {
    //document.documentElement.classList.toggle("dark-mode", state);
    darkModeSwitcher();
}

// Listening for the changes in the OS settings and auto switching the mode
useDark.addListener((evt) => toggleDarkMode(evt.matches));

// Toggles the "dark-mode" class on click
darkModeButton.addEventListener("click", () => darkModeSwitcher());

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
