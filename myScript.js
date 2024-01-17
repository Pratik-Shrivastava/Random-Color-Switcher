const body = document.querySelector('body')
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');


let hexColor = function()
{
    const myArr = "0123456789ABCDEF";
    let color = '#';
    for(let i=0; i<6; i++)
    {
        let index = Math.floor(Math.random()*15);
        color = color.concat(myArr[index]);
        console.log(myArr[index]);
    }
    return color;
}


let bgChange = function(){
    body.style.backgroundColor = hexColor();
}
let intervalId;
start.addEventListener('click', ()=>{
    intervalId = setInterval(bgChange(), 1);
})

stop.addEventListener('click', ()=>{
    clearInterval(intervalId);
})