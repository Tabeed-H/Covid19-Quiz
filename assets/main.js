//select html elements
let changeParagarph = document.getElementById("paragraph").getElementsByTagName("p")[0];
let questionContainer = document.getElementById("questions");
let startingBtn = document.getElementById("startbtn");


//this function add an event to the start button when the page loads
window.addEventListener("load", startQuiz)
function startQuiz(){
    startingBtn.addEventListener("click", quizStart)
};

//when the start quiz button is clicked
function quizStart(){
    changeParagarph.innerHTML = "Now Answer The Following Questions";
    startingBtn.style.display = "none";
    questionContainer.style.display = "block";
}