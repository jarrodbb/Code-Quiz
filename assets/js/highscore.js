//js for highscore page

// variables created to link HTML
var listOfScores = document.querySelector(".results-list")

var returnStart = document.getElementById("return")
var clearScores = document.getElementById("clear")

// empty arrays created
var allScore = []
var newScore = []

// newscore vaiable to equal local storage information. 
newScore = JSON.parse(localStorage.getItem("score"))

// if nothing in local storage. newstore to be empty
if (newScore == null){
    newScore = []
} 

//pushes value from local storage to var allScores
allScore.push(newScore)

//function to loop values, create li and append to ordered list
function addScoreList () {

    
    for (i =0; i <newScore.length; i++) {
        
        var listOfScore = document.createElement("li");
        listOfScore.innerHTML = newScore[i].join(" ")
        listOfScores.appendChild(listOfScore)
        console.log(newScore[i][1])
        
    }
}
addScoreList ()


//click listener added to clear local storage which clears the list
clearScores.addEventListener("click", function(event) {
    console.log(event.target)
    localStorage.clear()
    listOfScores.innerHTML = "" 
    })

//click listener added to return to the start of the quiz
returnStart.addEventListener("click", function(event){
    window.location = "../index.html";
})


