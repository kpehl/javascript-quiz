// For the high score page, set up an event listener to clear the local storage when requested by button

var clearScoresEl = document.querySelector("#clear-data");

clearScoresEl.addEventListener("click", function() {localStorage.clear()});