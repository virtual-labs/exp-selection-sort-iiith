/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
function buildQuiz() {
// we'll need a place to store the HTML output
const output = [];

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for (letter in currentQuestion.answers) {
// ...add an HTML radio button
answers.push(
`<label>
<input type="radio" name="question${questionNumber}" value="${letter}">
${letter} :
${currentQuestion.answers[letter]}
</label>`
);
}

// add this question and its answers to the output
output.push(
`<div class="question"> ${currentQuestion.question} </div>
<div class="answers"> ${answers.join("")} </div>`
);
});

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join("");
}

function showResults() {
// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll(".answers");
answerContainers.forEach(e => e.style.color = "black");

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// find selected answer
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

// if answer is correct
if (userAnswer === currentQuestion.correctAnswer) {
// add to the number of correct answers
numCorrect++;

// color the answers green
//answerContainers[questionNumber].style.color = "lightgreen";
} else {
// if answer is wrong or blank
// color the answers red
answerContainers[questionNumber].style.color = "red";
}
});

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


const myQuestions = [{
question: "1. Which among the following is an advantage of Selection Sort over other sorting algorithms? ", ///// Write the question inside double quotes
answers: {
a: "Faster than others", ///// Write the option 1 inside double quotes
b: "It does not require additional storage spaces ", ///// Write the option 2 inside double quotes
c: "Very efficient ", ///// Write the option 3 inside double quotes
d: "Suitable for long lists ", ///// Write the option 4 inside double quotes
},
correctAnswer: "b" ///// Write the correct option inside double quotes
},

{
question: "2. What is the average and best case time complexity of Selection Sort?",  ///// Write the question inside double quotes
answers: {
a: "O(n<sup>2</sup>), O(n<sup>2</sup>) ",                  ///// Write the option 1 inside double quotes
b: "O(n<sup>2</sup>), O(n)",                  ///// Write the option 2 inside double quotes
c: "O(n<sup>2</sup>), O(nlogn)", ///// Write the option 3 inside double quotes
d: "None of these", ///// Write the option 4 inside double quotes
},
correctAnswer: "a"                ///// Write the correct option inside double quotes
},

{
question: "3. Given array = {11,12,13,10,9}. Number of iterations required by Bubble Sort and Selection Sort are?",  ///// Write the question inside double quotes
answers: {
a: "5,4 ",                  ///// Write the option 1 inside double quotes
b: "4,4",                  ///// Write the option 2 inside double quotes
c: "4,6 ", ///// Write the option 3 inside double quotes
d: "5,5 ", ///// Write the option 4 inside double quotes
},
correctAnswer: "b"                ///// Write the correct option inside double quotes
},

{
question: "4. What are the correct intermediate steps when you perform Selection Sort on [2, 7, -3, 5]? ",  ///// Write the question inside double quotes
answers: {
a: "[-3, 2, 7, 5] -> [-3, 2, 5, 7] ",                  ///// Write the option 1 inside double quotes
b: " [-3, 7, 2, 5] -> [-3, 2, 7, 5] -> [-3, 2, 5, 7] ",                  ///// Write the option 2 inside double quotes
c: "[-3, 7, 5, 2] -> [-3, 2, 5, 7] ", ///// Write the option 3 inside double quotes
d: "[-3, 7, 2, 5] -> [-3, 5, 2, 7] -> [-3, 2, 5, 7] ", ///// Write the option 4 inside double quotes

},
correctAnswer: "b"                ///// Write the correct option inside double quotes
},

{
question: "5. Predict the structure of Selection Sort?",  ///// Write the question inside double quotes
answers: {
a: "One Loop",                  ///// Write the option 1 inside double quotes
b: "Two loops",                  ///// Write the option 2 inside double quotes
c: "Two lops in a loop  ", ///// Write the option 3 inside double quotes
d: "Loop inside a loop ", ///// Write the option 4 inside double quotes

},
correctAnswer: "d"                ///// Write the correct option inside double quotes
},

];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
