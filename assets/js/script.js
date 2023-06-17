var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var displayQuiz = document.querySelector(".quiz")
var displayQuestionTitle = document.querySelector(".displayQuestion")
var startEl = document.querySelector(".quizStartInfo")
var quizEl = document.querySelector(".quizBody")

var listOfScores = document.querySelector(".results-list")

var viewHighScore = document.querySelector(".view-highscore")

var timerCount;

var questionTitle = ["Commonly used data types DO NOT Include: ", "The condition in an if / else statement is enclosed within ____.", "Arrays in JavaScript can be used to store ____.", "String values must be enclosed within ____ when being assigned to variables."]
var currentQuestion = -1
var answerOptions = ""

var endQuizInitials = document.createElement("form")
var formLabel = document.createElement("label")
var formInput = document.createElement("input")
var submitButton = document.createElement("button")
var displayFinalScore = document.createElement("p")


var questionTitleEl = document.createElement("ol");
questionTitleEl.style.display = "none"
var li1Input1 = document.createElement("li");
var li1Input2 = document.createElement("li");
var li1Input3 = document.createElement("li");
var li1Input4 = document.createElement("li");
var answers = [li1Input1, li1Input2, li1Input3, li1Input4]

var displayRightOrWrong = document.createElement("div")

var finalScore = timerCount;

quizEl.appendChild(questionTitleEl);

for (i =0; i < 4; i++) {
    questionTitleEl.appendChild(answers[i])
}

quizEl.appendChild(displayRightOrWrong)

function startTimer() {
    
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;

    if (timerCount <= 0){
    clearInterval(timer)
    // end quiz 
    // go to last page 
    timerCount = 0;
    endQuiz()
    
    }
    }, 1000)
}

function startQuiz() {
    questionTitleEl.style.display = "block"

    // startEl.appendChild(startButton)
   
    
    // displayQuiz.textContent = '';
    // set timer to 76 instead of 75 due to loading delay
    timerCount = 76;
    startTimer();
    renderQuestion(0);
  }

  startButton.addEventListener("click", startQuiz);

// render first question
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

    displayQuestionTitle.textContent = questionTitle[questionNumber] 

    currentQuestion = questionNumber

  }


  for (i=0; i<4; i++) {

  // Attach a listener to document for clicking the correct answer 
  answers[i].addEventListener("click", function(event) {
    // console.log(event.target.innerHTML)
    var selection = event.target.innerHTML;
    console.log(selection)
    console.log(answerOptions)
  
    if (selection === answerOptions){
        
        console.log("YESSS")
        renderQuestion(currentQuestion + 1)
        console.log(startEl.innerText)
        
        // // display correct ?????
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

var userFinalScore = []

    

function endQuiz() {   
    // add event listener

    quizEl = '';
    // endQuizInitials.style.display = "block"
    questionTitleEl.style.display = "none"

    clearInterval(timer)

    displayQuestionTitle.textContent = "All done!"

    var score = timerCount
    //
    timerElement.textContent = score

    startEl.appendChild(displayFinalScore)
    startEl.appendChild(endQuizInitials)
    endQuizInitials.appendChild(formLabel)
    endQuizInitials.appendChild(formInput)
    endQuizInitials.appendChild(submitButton)

    // formLabel.setAttribute('action', './form.html')
    formLabel.setAttribute('method', 'post')
    formInput.setAttribute('type', 'text')
    formInput.setAttribute('placeholder', ' ')
    submitButton.setAttribute('type', 'submit')
    submitButton.textContent = "submit"
    formLabel.innerHTML = "Enter initials: "
    displayFinalScore.textContent = "Your final score is " + score;


    endQuizInitials.addEventListener("submit", function(event){
    event.preventDefault();
    var initialsProvided = formInput.value;

    userFinalScore = [initialsProvided, score]

    console.log(initialsProvided)

    if (initialsProvided == "") {
            // formInput.value = "Unknown User"
            storeResults()
            window.location = "./assets/form.html";
        } else {
            storeResults()
            window.location = "./assets/form.html";
        }
    })
 
    function storeResults () {
        var scoreList = JSON.parse(localStorage.getItem("score"))
        console.log(scoreList)
        if (scoreList == null){
            scoreList = []
        }
        console.log(typeof(scoreList))
        scoreList.push(userFinalScore)
        localStorage.setItem("score", JSON.stringify(scoreList));
        // console.log(userFinalScore)
    }

}

viewHighScore.addEventListener("click", function(){
    window.location = "./assets/form.html";
})



