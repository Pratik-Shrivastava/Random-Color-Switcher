const body = document.querySelector('body')
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');


function hexColor()
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


function setColor()
{
    body.style.backgroundColor = hexColor();
}
let intervalId;
function bgChange()
{
    if(!intervalId)
    {
        intervalId = setInterval(setColor, 1000);
    }    
}
function stopChange()
{
    clearInterval(intervalId);
    intervalId = null;
}

start.addEventListener('click', bgChange)

stop.addEventListener('click', stopChange)