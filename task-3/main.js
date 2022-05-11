async function catPictures(){
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
let data = await response.json();
console.log(data);
let url = data[0].url;
let img = "<img src='"+url+"'height=300 width=500/>";
document.getElementById('result').innerHTML=img;
}
catPictures()
document.getElementById("newPicture").addEventListener("click",catPictures);