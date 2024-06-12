
// [{},{},{},{}] -> json



const questions=[
    {
    question:"which one from these is language for front-end?",
    answers:[
        {text:"html",correct:true}, 
        {text:"node",correct:false}, 
        {text:"express",correct:false}, 
        {text:"c++",correct:false}
    ]
},
{
    question:"which one from these is language for front-end?",
    answers:[
        {text:"html",correct:true},
        {text:"node",correct:false},
        {text:"express",correct:false},
        {text:"c++",correct:false}
    ]
},
{
    question:"which one from these is language for front-end?",
    answers:[
        {text:"html",correct:true},
        {text:"node",correct:false},
        {text:"express",correct:false},
        {text:"c++",correct:false}
    ]
},
{
    question:"which one from these is language for front-end?",
    answers:[
        {text:"html",correct:true},
        {text:"node",correct:false},
        {text:"express",correct:false},
        {text:"c++",correct:false}
    ]
}]

const questionElement=document.getElementById("question")
const answerButton=document.getElementById("answer-button")
const nextButton=document.getElementById("next-btn")


let currentQuestionIndex;
let score;


function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;

    questionElement.innerHTML=questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach((answer)=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button);
    })

}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }

}




startQuiz();


