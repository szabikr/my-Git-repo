let i =0;

let questionsAnsweredCount = 0;
let correctAnswersCount = 0;
let incorrectAnswersCount = 0;

let questionsAnswered = document.querySelector("#questions-answered");
let correctAnswers = document.querySelector("#correct");
let incorrectAnswers = document.querySelector("#incorrect");

let h1 = document.querySelector("h1");

let a1 = document.querySelector("#a1");
let a2 = document.querySelector("#a2");
let a3 = document.querySelector("#a3");
let a4 = document.querySelector("#a4");

let b1= document.querySelector('#b1')
let b2= document.querySelector('#b2')
let b3= document.querySelector('#b3')
let b4= document.querySelector('#b4')

let playAgain= document.querySelector('#playAgain')

let data = null;

async function getTrivia(){
    let response = await fetch("https://opentdb.com/api.php?amount=10");
    let data = await response.json();
    return data
} 

async function doWork(){
    data = await getTrivia()
}
doWork()


let question = document.querySelector("#question")
question.innerText = setTimeout(Convert((data.results[i].question)),2000)
let arr1 = [data.results[i].correct_answer,data.results[i].incorrect_answers[0],data.results[i].incorrect_answers[1],data.results[i].incorrect_answers[2]];
console.log(arr1);
if(arr1[0] == "True" || arr1[0] == "False"){
    arr1.splice(2,2);
    b3.style.visibility = "hidden"
    b4.style.visibility = "hidden"
    a3.style.visibility = "hidden"
    a4.style.visibility = "hidden"}
    let arr2 = randomiseArr(arr1);
    console.log(arr2)
    a1.innerText = arr2[0];
    a2.innerText = arr2[1];
    a3.innerText = arr2[2];
    a4.innerText = arr2[3];

b1.addEventListener('click',(e) => {
    b1.style.visibility = 'hidden'
    b2.style.visibility = 'hidden'
    b3.style.visibility = 'hidden'
    b4.style.visibility = 'hidden'
    playAgain.style.visibility = 'visible'
    a2.innerText = ""
    a3.innerText = ""
    a4.innerText = ""

    if (a1.innerText === data.results[i].correct_answer){
        a1.style.color = "green"
        correctAnswersCount++;
        questionsAnsweredCount++;
        correctAnswers.innerText = `Correct Answers: ${correctAnswersCount}`
        questionsAnswered.innerText = `Questions Answered: ${questionsAnsweredCount}` 
    } else { 
            a1.style.color = "red"
            incorrectAnswersCount++;
            questionsAnsweredCount++;
            incorrectAnswers.innerText = `Incorrect Answers: ${incorrectAnswersCount}`
            questionsAnswered.innerText = `Questions Answered: ${questionsAnsweredCount}`
            }
    })

b2.addEventListener('click',(e) => { 
b1.style.visibility = 'hidden'
b2.style.visibility = 'hidden'
b3.style.visibility = 'hidden'
b4.style.visibility = 'hidden'
playAgain.style.visibility = 'visible'
a1.innerText = ""
a3.innerText = ""
a4.innerText = ""

if (a2.innerText === data.results[i].correct_answer){
    a2.style.color = "green"
    correctAnswersCount++;
    correctAnswers.innerText = `Correct Answers: ${correctAnswersCount}`
    questionsAnsweredCount++
    questionsAnswered.innerText = `Questions Answered: ${questionsAnsweredCount}`}
else{
    a2.style.color = "red"
    incorrectAnswersCount++;
    questionsAnsweredCount++;
    incorrectAnswers.innerText = `Incorrect Answers: ${incorrectAnswersCount}`
    questionsAnswered.innerText = `Questions Answered: ${questionsAnsweredCount}`
    }
})

b3.addEventListener('click',(e) => {
    b1.style.visibility = 'hidden'
    b2.style.visibility = 'hidden'
    b3.style.visibility = 'hidden'
    b4.style.visibility = 'hidden'
    playAgain.style.visibility = 'visible'
    a1.innerText = ""
    a2.innerText = ""
    a4.innerText = ""
if (a3.innerText === data.results[i].correct_answer){
    a3.style.color = "green"
    correctAnswersCount++;
    correctAnswers.innerText = `Correct Answers: ${correctAnswersCount}`
    questionsAnsweredCount++
    questionsAnswered.innerText = `Questions Answered: ${questionsAnsweredCount}`}
else{
    a3.style.color = "red"
    incorrectAnswersCount++;
    questionsAnsweredCount++;
    incorrectAnswers.innerText = `Incorrect Answers: ${incorrectAnswersCount}`
    questionsAnswered.innerText = `Questions Answered: ${questionsAnsweredCount}`
    }       
})

b4.addEventListener('click',(e) => {
b1.style.visibility = 'hidden'
b2.style.visibility = 'hidden'
b3.style.visibility = 'hidden'
b4.style.visibility = 'hidden'
playAgain.style.visibility = 'visible'
a1.innerText = ""
a2.innerText = ""
a3.innerText = ""
if (a4.innerText === data.results[i].correct_answer){
    a4.style.color = "green"
    correctAnswersCount++;
    correctAnswers.innerText = `Correct Answers: ${correctAnswersCount}`
    questionsAnsweredCount++;
    questionsAnswered.innerText = `Questions Answered: ${questionsAnsweredCount}`}

else{
    a4.style.color ="red"
    incorrectAnswersCount++;
    questionsAnsweredCount++;
    incorrectAnswers.innerText = `Incorrect Answers: ${incorrectAnswersCount}`
    questionsAnswered.innerText = `Questions Answered: ${questionsAnsweredCount}`
    }       
})

playAgain.addEventListener("click",(e) => {
    playAgain.style.visibility = "hidden";
if(a1.innerText === "True" || a1.innerText === "False"){
    a3.style.visibility = "visible";
    a4.style.visibility = "visible";
    }
    
    
b1.style.visibility = 'visible'
b2.style.visibility = 'visible'
b3.style.visibility = 'visible'
b4.style.visibility = 'visible'
a1.style.color = "black"
a2.style.color = "black"
a3.style.color = "black"
a4.style.color = "black"
    
    getTrivia();
})





















   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    function randomiseArr(array){
        let currentIndex = array.length, randomIndex;
        while (currentIndex !==0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--; 
            [array[currentIndex], array[randomIndex]] = [array[randomIndex],array[currentIndex]];
        }
        return array;
    }
    
    function Convert(string){
       let newString =  string.replace(/&quot;/g, `"`).replace(/&#039;/g,`'`)
        return newString;
    }