const questions = [
    {
        id:1,
        ques:`Urdu was declared national language of Pakistan in:`,
        option1:`April 1950`,
        option2:`April 1955`,
        option3:`April 1954`,
        option4:`April 1952`,
        answer: `April 1954`
    },
    {
        id:2,
        ques:` Which of the following countries has the largest area in the world?`,
        option1:`Canada`,
        option2:`China`,
        option3:`USA`,
        option4:`Russia`,
        answer:`Russia`
    },
    {
        id:3,
        ques:`Which is the smallest country in the world?`,
        option1:`Naura`,
        option2:`Vatican City`,
        option3:`Monaco`,
        option4:`None of these`,
        answer:`Vatican City`
    },
    {
        id:4,
        ques:`Which of the following countries lead in the production of tin:`,
        option1:`Malaysia`,
        option2:`USA`,
        option3:`China`,
        option4:`None of these`,
        answer:`China`
    },
    {
        id:5,
        ques:` How many letters are there in Urdu alphabets:`,
        option1:`35`,
        option2:`36`,
        option3:`37`,
        option4:`38`,
        answer:`37`
    },
    {
        id:6,
        ques:`Who composed the verses of Pakistan national Anthem?`,
        option1:`Hafeez Jallandri`,
        option2:`Nasir Kazmi`,
        option3:`Allama Iqbal`,
        option4:`Faiz Ahmed Faiz`,
        answer:`Hafeez Jallandri`
    },
    {
        id:7,
        ques:`Moenjodaro means:`,
        option1:`Civilized City`,
        option2:`Mound of Dead`,
        option3:`Garden`,
        option4:`None of these`,
        answer:`Mound of Dead`
    },
    {
        id:8,
        ques:`Who destroyed the temple of Somnat?`,
        option1:`Mahmood Ghaznavi`,
        option2:`Gahuri`,
        option3:`Babar`,
        option4:`None of these`,
        answer:`Mahmood Ghaznavi`
    },
    {
        id:9,
        ques:`In which year Muhammad Bin Qasim attacked Sindh?`,
        option1:`700`,
        option2:`710`,
        option3:`712`,
        option4:`None of these`,
        answer:`712`
    },
    {
        id:10,
        ques:`Muhammad Bin Qasim was called back by:`,
        option1:`Walid bin Abdul Malik`,
        option2:`Sulaiman Bin Abdul Malik`,
        option3:`Khalid Bin Abdul Malik`,
        option4:`None of these`,
        answer: `Sulaiman Bin Abdul Malik`
    },

];

let count = 0;
let num = 0;
let score = 0;
// const start = document.querySelector("#start");
const next = document.querySelector(".btn-next")
const prev = document.querySelector(".btn-prev")
const quiz = document.getElementById("ques");
const ques_num = document.getElementById("ques-no");
const score_board = document.getElementById("score");
const container = document.getElementsByClassName("container")

const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");

const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")
const text3 = document.getElementById("text3")
const text4 = document.getElementById("text4")


function ShowQues(){
    const item = questions[count];
    quiz.textContent = item.ques;
    text1.textContent = item.option1;
    text2.textContent = item.option2;
    text3.textContent = item.option3;
    text4.textContent = item.option4;

  

}





next.addEventListener("click", function(){
    // num++;
    count++;
    // for (let quiz2 in quizzes) {
    //     let userAnswer = input.question(quiz2.question);
    //     if(userAnswer == quiz2.answer) score++;
    //  }
    //  console.log(score)
    // if(count == questions.length){
    //     link("./score.html")m,
    // }
    

    ShowQues()

})

// start.addEventListener("click",function(){

//     count = 0;


// })



// prev.addEventListener("click", function(){
//     // num--;
//     count--;
//     // console.log(num)
//     ShowQues()

// })