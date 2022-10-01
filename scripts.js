// Select the button
const darkmodeswitch = document.getElementById("darkmode");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");
const memoji = document.getElementById("memoji");

// Listen for a click on the button
darkmodeswitch.addEventListener("click", function() {
  // If the current URL contains "ligh.css"
  if (theme.getAttribute("href") == "light.css") {
    memoji.setAttribute("src", "./media/memojisleep.png");
    // ... then switch it to "dark-theme.css"
    theme.href = "dark.css";
    darkmodeswitch.innerHTML = "Light Mode";
  // Otherwise...
  } else {
    memoji.setAttribute("src", "./media/memoji.png");
    // ... switch it to "light-theme.css"
    theme.href = "light.css";
    darkmodeswitch.innerHTML = "Dark Mode";
  }
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);