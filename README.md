Local storage 

Adds alt to image - html
# Code-Quiz

### week 4 challenge

## Description

Develop an interactive webpage for a quiz

Quiz to display initial information including the 
    * The title of the site "Coding Quiz Challenge"
    * Information of what will be displayed
    * A view high score button 
    * A timer element

When starting the quiz
    * One of four quiz questions will be displayed at a time. This includes the possible answers to be selected

Once completed the end quiz information is to be displayed. This includes
    * The users score 
    * Final time count
    * A form to include the user's initials
    * Submit button

Once the user has submitted their information
    * A new page is loaded
    * This is the High score page
    * This includes a list of the score
    * A button to clear the scores and a button to take the user back to quiz are also both rendered


## Installation

Click the link to access the Quiz

[Quiz](https://jarrodbb.github.io/Code-Quiz/)

[Github](https://github.com/jarrodbb/Code-Quiz)

Source code. The code index.html is the working code file
[index.html](https://github.com/jarrodbb/Code-Quiz/blob/main/index.html)
[form.html](https://github.com/jarrodbb/Code-Quiz/blob/main/assets/form.html)

JavaScript code.
[scipt.js](https://github.com/jarrodbb/Code-Quiz/blob/main/assets/js/script.js)
[highscore.js](https://github.com/jarrodbb/Code-Quiz/blob/main/assets/js/highscore.js)

CSS code
[style.css](https://github.com/jarrodbb/Code-Quiz/blob/main/assets/css/style.css)
[highscore-style.css](https://github.com/jarrodbb/Code-Quiz/blob/main/assets/css/highscore-style.css)



## Usage

By including JavaScipt listeners and functions to render the page the user is able to click through the questions. 

Time penalties have been added for incorrect answers. This will visually be displayed on the timer

The user has full control over the selection of their answers. For both an incorrect or correct selection the next question will be rendered. 

The timer will only stop if the user has answered each of the 4 questions or if the timer equals 0

Once the quiz is completed (or timer=0) the form page will be rendered. This allows the user to input their initials. Their score = the timer 

If the user does not input their initials the blank input is recorded

Once the score is submitted, the high score page is rendered. The user will be able to visually see their score listed

The high score page also allows the user to clear all the scores or return to the start of the quiz to complete it again. The High score page is also visible even if there are no scores to be added 


### Start of Quiz.


#### Clicking the "Start Quiz" Button

#### Question 1

#### Question 2

#### Question 3

#### Question 4

#### End of Quiz

#### Input initials 

#### Highscore page


## Credits

N/A

## License

Refer to license in the repo



