const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //get random number between 0 - 3//
    const numberRandom = getNumberRandom();
    document.body.style.backgroundColor = colors[numberRandom];
    color.textContent = colors[numberRandom];
})

function getNumberRandom (){
    return Math.floor(Math.random() * colors.length)
}