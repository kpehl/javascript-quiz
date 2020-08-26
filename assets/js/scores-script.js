// For the high score page, set up an event listener to clear the local storage when requested by button

var clearScoresEl = document.querySelector("#clear-data");

clearScoresEl.addEventListener("click", function() {localStorage.clear()});

// Function to create a score item using the user's input and appending that item to the high score list
var createScoreEl = function(scoreDataObj) {
    // Create the list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "score-item";

    // Add a unique task id as a custom attribute
    listItemEl.setAttribute("data-score-id", scoreIdCounter);

    // Create a div to hold score info and add to list item
    var scoreInfoEl = document.createElement("div");
    // and give it a class name
    scoreInfoEl.className = "score-content";

    // Add HTML content to the div
    scoreInfoEl.innerHTML = "<p class='score-item'>" + scoreDataObj.initials + ": " +scoreDataObj.score;
    listItemEl.appendChild(scoreInfoEl);

    // Add the unique task id to the taskDataObj for this task
    scoreDataObj.id = scoreIdCounter;
    //and add the taskDataObj to the tasks array - this will allow for data persistence
    score.push(scoreDataObj);

    // Save the data to local storage
    saveScore();
}

// Load the high scores from local storage
var loadScores = function() {
    // Get task items from local storage
    var savedScores = localStorage.getItem("scores");
    // If the scores item does not exist, it will be null, and the function will exit without loading anything
    if (!savedScores) {
        return false;
    }

    // Convert tasks from the stringified format back into the array of objects
    savedScores = JSON.parse(savedScores);

    // Use the createScoreEl function to re-create the stored scores
    for (var i = 0; i < savedScores.length; i++) {
        createScoreEl(savedScores[i]);
    }
   
}