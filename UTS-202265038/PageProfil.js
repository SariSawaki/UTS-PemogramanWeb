console.log(document.getElementsByClassName('tugas')[0]);
console.log(document.getElementsByClassName('menu')[1]);
const li_ = document.getElementsByTagName('li');

for(let i=0; i<li_.length; i++)
{
    li_[i].style.backgroundColor="#ffe8a3";
}
li_[0].setAttribute('class','tugas');
const header = document.getElementsByClassName('header')[0];
header.innerHTML=" ";
header.style.color="#8a4909"
header.style.fontSize="20pt";
header.style.textAlign="center";
const footer = document.querySelector('#left1');
console.log (footer);



const btn1 = document.getElementsByClassName('btn1')[0];
btn1.addEventListener('click', function(){
    for(let i=0; i<li_.length; i++)
{
    li_[i].style.backgroundColor="";
}
})

li_[0].addEventListener('mouseenter' , function(){
    li_[0].innerHTML="Sarlota Sawaki";
    li_[0].style.color="#c2831f";
    li_[0].style.backgroundColor="blanchedalmond";
})

li_[0].addEventListener('mouseleave' , function(){
    li_[0].innerHTML="SELAMAT DATANG DI WEB";
    li_[0].style.color="rgb(239, 178, 103)";
    li_[0].style.backgroundColor="blanchedalmond";
})

header.addEventListener("click", function(){
    header.innerHTML="Header";
    header.style.color="blanchedalmond";
    header.style.backgroundColor="#FFB6C1";
})
var zoomableElement = document.querySelector(".left1.zoomable");
document.getElementById("btn1").addEventListener("click", function(){
    zoomableElement.classList.toggle("zoomed");
});

document.addEventListener('DOMContentLoaded', function () {
    var left1 = document.querySelector('.center1');

    document.getElementById('btn1').addEventListener('click', function () {
        // Toggle the 'zoomed' class on left2 to enable/disable zoom effect
        right1.classList.toggle('zoomed');
    });
});