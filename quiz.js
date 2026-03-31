let score = 0;
let currentQuestionIndex = 0;

let questions = [
    {
        question: "Was ist die Hauptstadt von Österreich?",
        answers: ["Paris","London","Berlin","Wien"],
        correctAnswer: 3
    },
    {
        question: "Welche Farbe hat der Himmel?",
        answers: ["Gelb","Blau","Grün","Rot"],
        correctAnswer: 1
    },
    {
        question: "Wieviele Beine hat ein Tisch?",
        answers: ["2","6","8","4"],
        correctAnswer: 3
    }
]

function displayQuestion(){
    
    if(currentQuestionIndex >= questions.length){
        document.getElementById("quiz-container").hidden = true;
        document.getElementById("result").hidden = false;
        document.getElementById("score").textContent = score;
        return;
    }

    let question = questions[currentQuestionIndex];
    // Achtung " statt ' benutzt
    document.getElementById("question").textContent = question.question;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement("button");
        answerButton.classList.add("btn", "btn-dark", "me-2");
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(index);
        answersDiv.appendChild(answerButton);
    });
}

displayQuestion();

function checkAnswer(userAnswer){
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if(userAnswer == correctAnswer){
        score +=1;
    }

    nextQuestion();
}

function nextQuestion(){
    currentQuestionIndex +=1;
    displayQuestion();
}