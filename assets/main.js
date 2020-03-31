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
let end = document.getElementById("moreLinks");
let questionsBank =[
    {
        question : "When Was COVID-19 Declared A Global Pandemic ?",
        choiceA : "January 2020",
        choiceB : "Febuary 2020",
        choiceC : "December 2019",
        choiceD : "March 2020",
        correct : "D",
        tag : "The World Health Organization (W.H.O) on March 11 declared COVID-19 a pandemic, pointing to the over 118,000 cases of the coronavirus illness in over 110 countries and territories around the world and the sustained risk of further global spread.||",
        source : "Times"
    },
    {
        question : "COVID-19 Ceases To Exit In Which Temperature Range ?",
        choiceA : "36 - 39 \&#8451;",
        choiceB : "45 - 50 \&#8451;",
        choiceC : "At Any Temperature",
        choiceD : "None Of The Above",
        correct : "D",
        tag : "From the evidence so far, the new coronavirus can be transmitted in ALL AREAS, including areas with hot and humid weather. ||",
        source : "W.H.O"
    },
    {
        question : "In What Ways Can We Containe The Spread Of The Virus ?",
        choiceA : "Wearing A Mask",
        choiceB : "Washing Hands Daily",
        choiceC : "Avoiding Social Gathering",
        choiceD : "All Of The Above",
        correct : "D",
        tag : "Wearing a mask, Washing hands daily and mainataining a social barrier can help in preventing the spread of the virus. ||",
        source : "W.H.O",
    },
    {
        question : "Is It Possible To have COVID-19 Twice ?",
        choiceA : "Yes",
        choiceB : "No",
        choiceC : "Rare Cases",
        choiceD : "",
        correct : "C",
        tag : "In a report Japanese authorities said a woman who had had the virus, and been declared virus-free, had tested positive again. ||",
        source : "The Guardian",
    },
    {
        question : "Which Country Has The Highest Number Registered Cases ?",
        choiceA : "China",
        choiceB : "Spain",
        choiceC : "Italy",
        choiceD : "U.S.A",
        correct : "D",
        tag : "As of 30-03-2020 USA has 1,47,465 Confirmed cases of Covid-19, followed by Italy and then Spain. ||",
        source : "Google",
    },
    {
        question : "What Is a Pandemic ?",
        choiceA : "A Problem That Has Grown Out Of Control",
        choiceB : "Disease Which Affects A Whole Country Or The Entire World",
        choiceC : "Event In which A Disease Is Actively Spreading",
        choiceD : " When a disease occurs infrequently and irregularly.",
        correct : "B",
        tag : "An epidemic that has spread over several countries or continents, affecting a large number of people. A pandemic is when an epidemic spreads between countries. ||",
        source : "Health.com",
    },
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
document.getElementById("totalQuestions").innerHTML = questionsBank.length;

function questionGenerater(){
    let q = questionsBank[currentPage];
    presentQuestion.innerHTML = q.question;
    presentChoiceA.innerHTML = q.choiceA;
    presentChoiceB.innerHTML = q.choiceB;
    presentChoiceC.innerHTML = q.choiceC;
    presentChoiceD.innerHTML = q.choiceD;
    presentExplaination.innerHTML = "EXTRA :\n" + q.tag + "\n Source :" + "\n" + q.source;
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
        button.removeEventListener("click", nextQuestion)
    }
};

function nextQuestion(){
    document.getElementById("optionBank").style.borderColor = "black";
    document.getElementById("explaination").style.display = "none";
    button.className = "btn";
    if(currentPage < lastQuestionIndex){
        currentPage++;
        document.getElementById("presentQuestion").innerHTML = currentPage;
        questionGenerater();
    }else{
        //alert("you have completed the quiz")
        questionContainer.style.display = "none";
        changeParagarph.innerHTML = "Quiz Completed \n For More Information Visit"
        end.style.display = "block";
    }
    button.removeEventListener("click", nextQuestion)
};

