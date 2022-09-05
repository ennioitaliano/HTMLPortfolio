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
    darkmodeswitch.innerHTML = "Light mode";
  // Otherwise...
  } else {
    memoji.setAttribute("src", "./media/memoji.png");
    // ... switch it to "light-theme.css"
    theme.href = "light.css";
    darkmodeswitch.innerHTML = "Dark mode";
  }
});