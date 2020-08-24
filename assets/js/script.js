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



// Declare variables for the question and answer arrays
var question, ans1, ans2, ans3, ans4, answer


// Question array
var quizQuestions = [
    {question: "Question 1", ans1: "Q1Answer1", ans2: "Q1Answer2", ans3: "Q1Answer3", ans4: "Q1Answer4"},
    {question: "Question 2", ans1: "Q2Answer1", ans2: "Q2Answer2", ans3: "Q2Answer3", ans4: "Q2Answer4"},
    {question: "Question 3", ans1: "Q3Answer1", ans2: "Q3Answer2", ans3: "Q3Answer3", ans4: "Q3Answer4"},
    {question: "Question 4", ans1: "Q4Answer1", ans2: "Q4Answer2", ans3: "Q4Answer3", ans4: "Q4Answer4"},
    {question: "Question 5", ans1: "Q5Answer1", ans2: "Q5Answer2", ans3: "Q5Answer3", ans4: "Q5Answer4"},
    {question: "Question 6", ans1: "Q6Answer1", ans2: "Q6Answer2", ans3: "Q6Answer3", ans4: "Q6Answer4"},
    {question: "Question 7", ans1: "Q7Answer1", ans2: "Q7Answer2", ans3: "Q7Answer3", ans4: "Q7Answer4"},
    {question: "Question 8", ans1: "Q8Answer1", ans2: "Q8Answer2", ans3: "Q8Answer3", ans4: "Q8Answer4"},
    {question: "Question 9", ans1: "Q9Answer1", ans2: "Q9Answer2", ans3: "Q9Answer3", ans4: "Q9Answer4"},
    {question: "Question 10", ans1: "Q10Answer1", ans2: "Q10Answer2", ans3: "Q10Answer3", ans4: "Q10Answer4"}
]

// Answer array
var quizAnswers = [
    {answer: "Q1Answer1"},
    {answer: "Q2Answer1"},
    {answer: "Q3Answer1"},
    {answer: "Q4Answer1"},
    {answer: "Q5Answer1"},
    {answer: "Q6Answer1"},
    {answer: "Q7Answer1"},
    {answer: "Q8Answer1"},
    {answer: "Q9Answer1"},
    {answer: "Q10Answer1"},
]

// Initialization of variables for the points and the number of questions
var points = 0;
var totalQuestions = 10;

// Quiz Timer
// This timer will display a countdown second by second and alert the user when time is up

// Start the timer when the Start button is clicked
var startTimer = function() {
    document.getElementById("start-btn").onclick = function () {
        interval = setInterval(myTimer, 1000);
    }
}

// Set the time in seconds for the timer to run
var count = 5;

// Display the count in the browser window
var myTimer = function () {
    // Alert the user when time is up
    if (count < 0) {
            document.getElementById("count").innerHTML = "Done";
            clearInterval(interval);
            return;
    }
    else {
        document.getElementById("count").innerHTML = count;
        console.log(count);
        count--;
    }
}

startTimer();

// Scoring Function

// Run the quiz

// Stop the quiz

var questionID = 0;
console.log(quizQuestions[questionID].ans1)



// // A function to test the quiz questions
// var createQuestion = function(questionID) {
//     // Create a new div element to hold the answer choices
//     var questionContainerEl = document.createElement("div");
//     questionContainerEl.className = "answer-list";

//     // Create a button for answer #1 and add it to the div
//     var ans1ButtonEl = document.createElement("button");
//     ans1ButtonEl.textContent = quizQuestions[questionID].ans1;
//     ans1ButtonEl.className = "btn"
//     ans1ButtonEl.setAttribute("data-answer-id", questionID);
//     questionContainerEl.appendChild(ans1ButtonEl);

//     // Create a button for answer #2 and add it to the div
//     var ans2ButtonEl = document.createElement("button");
//     ans2ButtonEl.textContent = quizQuestions[questionID].ans2;
//     ans2ButtonEl.className = "btn";
//     ans2ButtonEl.setAttribute("data-answer-id", questionID);
//     questionContainerEl.appendChild(ans2ButtonEl);

//     // Create a button for answer #3 and add it to the div
//     var ans3ButtonEl = document.createElement("button");
//     ans3ButtonEl.textContent = quizQuestions[questionID].ans3;
//     ans3ButtonEl.className = "btn";
//     ans3ButtonEl.setAttribute("data-answer-id", questionID);
//     questionContainerEl.appendChild(ans3ButtonEl);

//     // Create a button for answer #4 and add it to the div
//     var ans4ButtonEl = document.createElement("button");
//     ans4ButtonEl.textContent = quizQuestions[questionID].ans4;
//     ans4ButtonEl.className = "btn";
//     ans4ButtonEl.setAttribute("data-answer-id", questionID);
//     questionContainerEl.appendChild(ans4ButtonEl);

//     console.log(questionContainerEl);

//     // Return the container
//     return questionContainerEl;

// }

// createQuestion();

