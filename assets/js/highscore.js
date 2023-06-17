var listOfScores = document.querySelector(".results-list")

var returnStart = document.getElementById("return")
var clearScores = document.getElementById("clear")


var allScore = []

var newScore = JSON.parse(localStorage.getItem("score"))

console.log(newScore)
console.log((localStorage.getItem("score")))

allScore.push(newScore)

console.log(allScore)

function addScoreList () {

    
    for (i =0; i <newScore.length; i++) {
        var listOfScore = document.createElement("li");
        listOfScore.innerHTML = newScore[i].join(" ")
        listOfScores.appendChild(listOfScore)
        console.log(newScore[i][1])
    }
}
addScoreList ()


// renderNewScore();

clearScores.addEventListener("click", function(event) {
    console.log(event.target)
    localStorage.clear()
    listOfScores.innerHTML = "" 
    })

returnStart.addEventListener("click", function(event){
    window.location = "../index.html";
})


