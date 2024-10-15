let label = document.querySelector(".button");
let checkBox = document.querySelector("#check");
let body = document.querySelector("body");

// Apply the saved mode when the page loads
window.onload = () => {
  const savedMode = JSON.parse(localStorage.getItem('mode'));
  if (savedMode) {
    checkBox.checked = true;
    body.style.backgroundColor = "#1A1A1A";
  } else {
    checkBox.checked = false;
    body.style.backgroundColor = "#fff";
  }
};

// Add event listener to the label or button
label.addEventListener("click", () => {
  setTimeout(() => {
    if (checkBox.checked) {
      body.style.backgroundColor = "#1A1A1A";
    } else {
      body.style.backgroundColor = "#fff";
    }
   // updateLocalStorage(); // Save mode to localStorage
  }, 800);
});

