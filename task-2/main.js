let counter = document.querySelector('#count')
count = 0
function countUp(){
    count++;
    counter.innerText = count;
if (count===12){
    clearInterval(stop);
}
}
let stop = setInterval(countUp,600);

// recap work with hamza
// const pElement = document.querySelector('#count');

// function addCount(){
//     let counter = number(pElement.innerText);
//     counter++
//  if (counter === 12) {
//      clearInterval(interval);
//     }
//     pElement.textContent = counter;
// }

// const interval = setInterval(addCount,1000);