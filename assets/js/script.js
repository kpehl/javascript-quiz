// Pseudocode
// When the user presses the start button
    // A timer starts counting down by 1 second intervals
    // While there are questions to be answered and while there is time remaining on the timer
        // A question is populated in the browser window
            // The question will have 4 buttons with multiple choice answers
        // The user selects an answer by clicking on the button
            // Feedback is provided
                // Correct!
                    // Move on to the next question
                    // Points are added to the total score
                // Incorrect!
                    // Penalize 10 seconds from the timer and move on to the next question
                    // No points are added to the total score
        // The next question replaces the previous one, with corresponding answers
    // When the quiz is over, the browser window displays "All Done!"" and the user is shown their score along with a form to submit their initials
        // Submitting the form saves the score and their initials to local storage
    
    // High scores can be seen when the user clicks on the View High Scores link
    // The high scores page has a Go Back button and a Clear High Scores button
        // The Go Back button returns the user to the main page
        // The Clear High Scores button will clear the local storage



// Declare variables for the question and answer array
var question, ans1, ans2, ans3, ans4, correctAnswer


// Question array
var quizQuestions = [
    {question: "What characters are used to start a comment in a JavaScript script file?", ans1: "//", ans2: "<--!", ans3: "'", ans4: "#", correctAnswer: "opt1"},
    {question: "What is a good tool to use in your code to check that values are as expected?", ans1: ".innerHTML", ans2: "console.log", ans3: "break", ans4: "iterations", correctAnswer: "opt2"},
    {question: "What characters surround the condition(s) in a while loop?", ans1: "Curly Brackets {}", ans2: "Square Brackets []", ans3: "Parentheses ()", ans4: "nothing  ", correctAnswer: "opt3"},
    {question: "When an array is defined, what characters surround the array?", ans1: "Curly Brackets {}", ans2: "Square Brackets []", ans3: "Parentheses ()", ans4: "nothing  ", correctAnswer: "opt2"},
    {question: "What will JavaScript assign to z in the following equation?   x = '1'    y = '2'   z = x + y?", ans1: "3", ans2: "'3'", ans3: "1 2", ans4: "12", correctAnswer: "opt4"},
    {question: "JavaScript arrays can be used to store______.", ans1: "Numbers", ans2: "Strings", ans3: "Objects", ans4: "All of the Above", correctAnswer: "opt4"},
    {question: "What characters enclose a code block to be executed in a function?", ans1: "Curly Brackets {}", ans2: "Square Brackets []", ans3: "Parentheses ()", ans4: "nothing  ", correctAnswer: "opt1"},
    {question: "Which is NOT a 'falsy' value?", ans1: "NaN", ans2: "\"\"", ans3: "0", ans4: "'false'", correctAnswer: "opt4"},
    {question: "When you want to specify several required conditions in an if statement, what goes between them?", ans1: "||", ans2: "&&", ans3: "!", ans4: "!|", correctAnswer: "opt2"},
    {question: "What characters enclose a JavaScript object?", ans1: "Curly Brackets {}", ans2: "Square Brackets []", ans3: "Parentheses ()", ans4: "nothing  ", correctAnswer: "opt1"}
]


// Initialization of variables for the points and the number of questions
var points = 0;
var currentQuestion = 0;
var totalQuestions = quizQuestions.length;

// Define an element for the main page content
var pageContentEl = document.querySelector(".page-content");

// Define an element for the intro page content
var introContentEl = document.querySelector(".intro");

// Define an element for the question wrapper content
var questionWrapperEl = document.querySelector(".question-wrapper");

// Set the question wrapper to be hidden when the page is loaded
questionWrapperEl.style.display = "none";

// Define an element for the outro content
var outroContentEl = document.querySelector(".outro");

// Set the outro to be hidden when the page is loaded
outroContentEl.style.display = "none";

// Define an element for the score submit button
var scoreBtnEl = document.querySelector("#save-score");

// Define an element for the high scores
var highScoresEl = document.querySelector(".high-scores");

// Define an element for the score initals form
var highScoreFormEl = document.querySelector("#score-form");

// Define an element for the score report
var scoreReportEl = document.querySelector("#score-report");


// Quiz Timer
// This timer will display a countdown second by second and alert the user when time is up

// Start the timer when the Start button is clicked
var startTimer = function() {
    interval = setInterval(myTimer, 1000);
}

// Set the time in seconds for the timer to run, giving the user 15 seconds per question
var count = 15 * totalQuestions;

// Display the count in the browser window
var myTimer = function () {
    // Alert the user when time is up and end the quiz
    if (count < 0) {
            document.getElementById("count").innerHTML = "Out of Time";
            clearInterval(interval);
            endQuiz();
            return;
    }
    else {
        document.getElementById("count").innerHTML = "<h3>Time: " + count + "</h3>";
        count--;
    }
}

// Hide a division not in use
var hideDiv = function(hideID) {
    var hideDivEl = document.querySelector(hideID);
    hideDivEl.style.display = "none";
}

// Show a division that was hidden
var showDiv = function(showID) {
    var showDivEl = document.querySelector(showID);
    showDivEl.style.display = "block";
}

// Start button handler
var startButtonHandler = function (event) {
    var targetEl = event.target;
    if (targetEl.matches(".start-btn")) {
        startTimer();
        hideDiv(".intro");
        showDiv(".question-wrapper");
        runQuiz();
    }    
}

// A function to population the question and the answer buttons
var createQuestion = function (questionID) {
    // console.log(questionID);
    // console.log(quizQuestions[questionID]);
    document.getElementById("question").innerHTML = quizQuestions[questionID].question;
    questionWrapperEl.querySelector("#opt1").textContent = quizQuestions[questionID].ans1;
    questionWrapperEl.querySelector("#opt2").textContent = quizQuestions[questionID].ans2;
    questionWrapperEl.querySelector("#opt3").textContent = quizQuestions[questionID].ans3;
    questionWrapperEl.querySelector("#opt4").textContent = quizQuestions[questionID].ans4;
}

// A function to check the answer
var checkAnswer = function () {
    // console.log(currentQuestion);
    var targetEl = event.target;
    // console.log(targetEl);
    var answerChoice = targetEl.id;
    // console.log(answerChoice);
    var localCorrectAnswer = quizQuestions[currentQuestion].correctAnswer;
    // console.log(localCorrectAnswer);
    if (answerChoice === localCorrectAnswer) {
        document.getElementById("correct").innerHTML = "<p>The last answer was correct!</p>";
        points = points + 1;
        currentQuestion++;
    }
    else {
        document.getElementById("correct").innerHTML = "<p>The last answer was incorrect!</p>";
        count = count - 10;
        currentQuestion++;
    }
    if (currentQuestion >= totalQuestions || count < 0) {
        endQuiz();
    }
}

// A function to run the quiz
var runQuiz = function() {
    if (currentQuestion === totalQuestions) {
        endQuiz();
    }
    else {
        createQuestion(currentQuestion); 
    }   
}

// A function to end the quiz
var endQuiz = function() {
    clearInterval(interval);
    hideDiv(".question-wrapper");
    showDiv(".outro")
    scoreReportEl.textContent = "Your score is " + points +  ".";
}




// A function to save the score to local storage 
var saveScore = function() {
    // Prevent a page refresh, losing local data
    event.preventDefault();

    // Get the user input from the form
    var scoreInitialsInput = document.querySelector("input[name='initials']").value;

    // Validate that an input was provided
    if (!scoreInitialsInput) {
        alert("Please enter your initals to save your score!")
    }

    // Package the initials and score as an object.
    var scoreDataObj = {
        score: points,
        initials: scoreInitialsInput,
        time: count
    };

    // retrieve the current high score list
    var scores = localStorage.getItem("scores");

    // if the localStorage does not have any values, set array to empty, otherwise parse into object
    if (!scores) {
        var scores = [];
    }
    else {
        scores = JSON.parse(scores);
    }

    // Add the new score to the array
    scores.push(scoreDataObj);

    // Save the new high score list to localStorage
    localStorage.setItem("scores", JSON.stringify(scores));

    // After the high score is saved, take the user to the high score page to see their name
    location.assign("./high-scores.html");
}




// Event Listeners
introContentEl.addEventListener("click", startButtonHandler);

questionWrapperEl.addEventListener("click", checkAnswer);

questionWrapperEl.addEventListener("click", runQuiz);

scoreBtnEl.addEventListener("click", saveScore);
