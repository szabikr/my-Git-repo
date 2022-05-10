let counter = document.querySelector('#count')
count = 0
function countUp(){
    count+=1;
    counter.innerText = count;
if (count==12){
    clearInterval(stop);
}
}
let stop = setInterval(countUp,600);
