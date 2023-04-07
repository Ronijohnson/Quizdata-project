






const allquestions = [
    {
        question: "Q1: HTML stands for?",
        a: "Hypertext Markup Language",
        b: "HighText Machine Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a-input"


    },
    {
        question: "Q2: What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b-input",
    },
    {
        question: "Q3: What does HTML stand for?",
        a: "Hyperloop Machine Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Hypertext Markup Language",
        correct: "d-input",
    },


    {
        question: "Q4: What year was JavaScript launched?",
        a: "1996",
        b: "1994",
        c: "1995",
        d: "none of the above",
        correct: "c-input",
    },
];
let question_header = document.querySelector(".question-header")
let question = document.querySelector("#question");
let answerElements = document.querySelectorAll(".answer");
let a_text = document.querySelector("#a-text")
let b_text = document.querySelector("#b-text");
let c_text = document.querySelector("#c-text");
let d_text = document.querySelector("#d-text");
let submitbtn = document.querySelector("#Submit");
let showscore = document.querySelector("#showscore");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
    // debugger;
    // deselectAnswers();
    let currentQuizdata = allquestions[currentQuiz];
    question.innerHTML = currentQuizdata.question;
    a_text.innerHTML = currentQuizdata.a;
    b_text.innerHTML = currentQuizdata.b;
    c_text.innerHTML = currentQuizdata.c;
    d_text.innerHTML = currentQuizdata.d;
};


loadQuiz();

const deselectAnswers = () => {
    answerElements.forEach((answerElements) => (answerElements.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) { answer = answerElement.id; }

    })
    return answer;

};

submitbtn.addEventListener("click", () => {
    const answer = getSelected();
    console.log(answer);
    if (answer) {
        if (answer === allquestions[currentQuiz].correct) {
            score++;        
        };
        currentQuiz++;

        deselectAnswers();
        if (currentQuiz < allquestions.length) {
            loadQuiz();
        }
        else {
            showscore.innerHTML = `
              <h2>You answered ${score}/${allquestions.length} questions correctly</h2>
              <button onclick="location.reload()">Try Again</button>
          `;
            showscore.classList.remove("scorearea");
        }
    }
});
    // for countDownDate
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =  "00:"+seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);