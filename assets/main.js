//select html elements
let changeParagarph = document.getElementById("paragraph").getElementsByTagName("p")[0];
let questionContainer = document.getElementById("questions");
let startingBtn = document.getElementById("startbtn");
let presentQuestion = document.getElementById("getQuestions")
let presentChoiceA = document.getElementById("A")
let presentChoiceB = document.getElementById("B")
let presentChoiceC = document.getElementById("C")
let presentChoiceD = document.getElementById("D")
let presentExplaination = document.getElementById("explaination");
let button = document.getElementById("next");
let questionsBank =[
    {
        question : "When Was COVID-19 Declared A Global Pandemic ?",
        choiceA : "January 2020",
        choiceB : "Febuary 2020",
        choiceC : "December 2019",
        choiceD : "March 2020",
        correct : "B",
        tag : "WHO Declared COVID-19 A Global Pandemic In the month of Febuary 2020"
    },
    {
        question : "Which Is The Most Affected Country ?",
        choiceA : "China",
        choiceB : "Italy",
        choiceC : "Spain",
        choiceD : "America",
        correct : "D",
        tag : "Currently America Has Recorded Highest Deadths Due To The Virus"
    },
    {
        question : "In What Ways Can We Containe The Spread Of The Virus ?",
        choiceA : "Wearing A Mask",
        choiceB : "Washing Hands Daily",
        choiceC : "Avoiding Social Gathering",
        choiceD : "All Of The Above",
        correct : "D",
        tag : "Keep Safe"
    }
]

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
    questionGenerater();
};

let lastQuestionIndex = questionsBank.length-1;
let currentPage = 0;

function questionGenerater(){
    let q = questionsBank[currentPage];
    presentQuestion.innerHTML = q.question;
    presentChoiceA.innerHTML = q.choiceA;
    presentChoiceB.innerHTML = q.choiceB;
    presentChoiceC.innerHTML = q.choiceC;
    presentChoiceD.innerHTML = q.choiceD;
    presentExplaination.innerHTML = "EXTRA :\n" + q.tag;
};

function checkAnswer(answer){
    if(answer === questionsBank[currentPage].correct){
        document.getElementById("optionBank").style.borderColor = "green";
        document.getElementById("explaination").style.display = "block";
        presentExplaination.style.color = "green";
        button.className = "checkbtn";
        button.addEventListener("click", nextQuestion);

    }else{
        document.getElementById("optionBank").style.borderColor = "red";
        document.getElementById("explaination").style.display = "block";
        presentExplaination.style.color = "red";
        button.className = "btn";
    }
};

function nextQuestion(){
    document.getElementById("optionBank").style.borderColor = "black";
    document.getElementById("explaination").style.display = "none";
    button.className = "btn";
    if(currentPage < lastQuestionIndex){
        currentPage++;
        questionGenerater();
        document.getElementById("presentQuestion").innerHTML = currentPage + 1;
    }else{
        alert("you have completed the quiz")
    }
    button.removeEventListener("click", nextQuestion)
};

document.getElementById("totalQuestions").innerHTML = questionsBank.length;
document.getElementById("presentQuestion").innerHTML = currentPage + 1;