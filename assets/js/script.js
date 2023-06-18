// variables created to link HTML
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var displayQuiz = document.querySelector(".quiz")
var displayQuestionTitle = document.querySelector(".displayQuestion")
var startEl = document.querySelector(".quizStartInfo")
var quizEl = document.querySelector(".quizBody")
var listOfScores = document.querySelector(".results-list")
var viewHighScore = document.querySelector(".view-highscore")

var timerCount;

// variable for each question title
var questionTitle = ["Commonly used data types DO NOT Include: ", "The condition in an if / else statement is enclosed within ____.", "Arrays in JavaScript can be used to store ____.", "String values must be enclosed within ____ when being assigned to variables."]
var currentQuestion = -1
// empty sting for selecting each answer
var answerOptions = ""

// variable to create necessary elements to render quiz
var endQuizInitials = document.createElement("form")
var formLabel = document.createElement("label")
var formInput = document.createElement("input")
var submitButton = document.createElement("button")
var displayFinalScore = document.createElement("p")

// ordered list created in order for the list elements to be appended to
var questionTitleEl = document.createElement("ol");
questionTitleEl.style.display = "none"
var li1Input1 = document.createElement("li");
var li1Input2 = document.createElement("li");
var li1Input3 = document.createElement("li");
var li1Input4 = document.createElement("li");
// var answers created as an array to include each li input
var answers = [li1Input1, li1Input2, li1Input3, li1Input4]

// div created to be able to display "right" or "wrong" depending on the slected answer
var displayRightOrWrong = document.createElement("div")

// final score created to equal the final timer count
var finalScore = timerCount;

//appending each question to the main body section
quizEl.appendChild(questionTitleEl);

//for loop to create each li
for (i =0; i < 4; i++) {
    questionTitleEl.appendChild(answers[i])
}

//appending the displayRightorWrong var allows it to be visable 
quizEl.appendChild(displayRightOrWrong)

//start timer function using the setInterval function. if statement included to clear timerInterval and run endQuiz function
function startTimer() {
    
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;

    // end quiz 
    // go to last page 
    if (timerCount <= 0){
    clearInterval(timer)
    
    timerCount = 0;
    endQuiz()
    
    }
    }, 1000)
}

function startQuiz() {
    questionTitleEl.style.display = "block"

    // set timer to 76 instead of 75 due to loading delay
    timerCount = 76;
    startTimer();
    renderQuestion(0);
  }

  startButton.addEventListener("click", startQuiz);

// function to render each question and answer options
function renderQuestion(questionNumber) {
    
    startEl.textContent = '';

    if (questionNumber == 0) {
        answers[0].textContent = "string"
        answers[1].textContent = "boolean"
        answers[2].textContent = "alerts"
        answers[3].textContent = "number"
        answerOptions = "alerts"
    }

    if (questionNumber == 1) {
        answers[0].textContent = "quotes"
        answers[1].textContent = "curly brackets"
        answers[2].textContent = "parentheses"
        answers[3].textContent = "square brackets"
        answerOptions = "parentheses"
    }

    if (questionNumber == 2) {
        answers[0].textContent = "number and strings"
        answers[1].textContent = "other arrays"
        answers[2].textContent = "booleans"
        answers[3].textContent = "all of the above"
        answerOptions = "all of the above"
    }
    
    if (questionNumber == 3) {
        answers[0].textContent = "commas"
        answers[1].textContent = "curly brackets"
        answers[2].textContent = "quotes"
        answers[3].textContent = "parentheses"
        answerOptions = "quotes"
    }

    //each question is dispalyed based on the index
    displayQuestionTitle.textContent = questionTitle[questionNumber] 

    currentQuestion = questionNumber

  }

// for loop to go through available question and display each answer options
  for (i=0; i<4; i++) {

  // listener to document for clicking the correct answer 
  answers[i].addEventListener("click", function(event) {
    //creating a selection variable based on the target and grabbing its innerHTML
    var selection = event.target.innerHTML;
    
    // If statement used to ensure the correct steps are followed based on the selected answer being correct or wrong
    // Time penalties added for incorrect answers
    // "correct" or "Wrong" displayed if wrong or right selection is made
    if (selection === answerOptions){
        
        renderQuestion(currentQuestion + 1)
        console.log(startEl.innerText)
        
        setTimeout( function(){
            displayRightOrWrong.innerText = 'Correct';
            displayRightOrWrong.style.visibility = 'visible'
        }, 100);
        setTimeout( function(){
            displayRightOrWrong.style.visibility = 'hidden'
        }, 1000);


    } 
    else{ 
        timerCount = timerCount - 10;
        renderQuestion(currentQuestion + 1)
        setTimeout( function(){
            displayRightOrWrong.innerText = 'WRONG!';
            displayRightOrWrong.style.visibility = 'visible'
        }, 100);
        setTimeout( function(){
            displayRightOrWrong.style.visibility = 'hidden'
        }, 1000);
    
    }
    if (currentQuestion >= 4) {
        endQuiz()
       
    }
})
}

// empty variable created to store score 
var userFinalScore = []

    
// endQuiz function created to be run if time is = 0 or all questions have been answered
function endQuiz() {   
    // ensure no previous information is displayed
    quizEl = '';
    questionTitleEl.style.display = "none"

    clearInterval(timer)

    displayQuestionTitle.textContent = "All done!"

    var score = timerCount
    // ensure timer displays the correct value including the time penalties
    timerElement.textContent = score

    // ensure the endQuiz information is rendered and appended 
    startEl.appendChild(displayFinalScore)
    startEl.appendChild(endQuizInitials)
    endQuizInitials.appendChild(formLabel)
    endQuizInitials.appendChild(formInput)
    endQuizInitials.appendChild(submitButton)

    // creates the form to take the users inputs
    formLabel.setAttribute('method', 'post')
    formInput.setAttribute('type', 'text')
    formInput.setAttribute('placeholder', ' ')
    submitButton.setAttribute('type', 'submit')
    submitButton.textContent = "submit"
    formLabel.innerHTML = "Enter initials: "
    displayFinalScore.textContent = "Your final score is " + score;

    // event listener added to the submit button. Prevent default included
    endQuizInitials.addEventListener("submit", function(event){
    event.preventDefault();
    var initialsProvided = formInput.value;

    // userFinalScore created as an array to send to local storage
    userFinalScore = [initialsProvided, score]

    if (initialsProvided == "") {
            storeResults()
            window.location = "./assets/form.html";
        } else {
            storeResults()
            window.location = "./assets/form.html";
        }
    })
 
    // function to store results. condition added if the user puts no initials
    function storeResults () {
        var scoreList = JSON.parse(localStorage.getItem("score"))
        console.log(scoreList)
        if (scoreList == null){
            scoreList = []
        }
        console.log(typeof(scoreList))
        scoreList.push(userFinalScore)
        localStorage.setItem("score", JSON.stringify(scoreList));
      
    }

}

// click listener added to navigate to the highscore page
viewHighScore.addEventListener("click", function(){
    window.location = "./assets/form.html";
})



