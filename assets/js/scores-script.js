
// Define an element to reference the score list
scoreListEl = document.getElementById("score-list");


// Load the high scores from local storage and display them in the list set up on the html page
var loadScores = function() {
    // retrieve the current high score list
    var scores = localStorage.getItem("scores");

    // if the localStorage does not have any values, set array to empty, otherwise parse into object
    if (!scores) {
        var scores = [];
        console.log("no scores saved")
    }
    else {
        scores = JSON.parse(scores);
        console.log(scores)
    }

    console.log(scores.length)

    // Create a list item and append it to the list for each score
    for (var i = 0; i < scores.length; i++) {
        console.log(scores.score)
        console.log(scores.initials)
        // create the list element
        var scoreLi = document.createElement("li");
        // set the content to be Initials: Score
        scoreLi.textContent = scores.initials + ": " + scores.score;
        // append the score to the list on the page
        scoreListEl.appendChild(scoreLi);
    }
}




// Set up an event listener to clear the local storage when requested by button

var clearScoresEl = document.querySelector("#clear-data");

clearScoresEl.addEventListener("click", function() {localStorage.clear()});

loadScores();