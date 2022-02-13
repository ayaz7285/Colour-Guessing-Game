var res;
function newColor(){
    let a = Math.floor((Math.random()*256));
    let b = Math.floor((Math.random()*256));
    let c = Math.floor((Math.random()*256));
    let ans = `rgb(${a}, ${b}, ${c})`;
    // console.log(`rgb(${a},${b},${c})`);
    return ans;
}
function setColor(){
    let newColorBtn = document.getElementById('new-color');
    newColorBtn.innerHTML = "NEW GAME"
    let result = document.getElementById('result');
    result.innerHTML = "";
    let a = Math.floor((Math.random()*256));
    let b = Math.floor((Math.random()*256));
    let c = Math.floor((Math.random()*256));
    res = `rgb(${a}, ${b}, ${c})`;
    let colorCode = document.getElementById('color-code');
    colorCode.innerHTML = `rgb(${a}, ${b}, ${c})`;
    // console.log(res);
}
function hardMode(){
    setColor();
    let row2 = document.getElementById('row2');
    row2.style.display = 'flex';
    let x = Math.floor((Math.random()*6)+1);
    let correctBox = document.getElementById(`box${x}`);
    correctBox.style.backgroundColor = res;
    for(let i=1;i<7;i++)
    {
        if(i!=x)
        {
            let boxColor = newColor();
            let wrongBox = document.getElementById(`box${i}`);
            wrongBox.style.backgroundColor = boxColor;
        }
    }
    // console.log(x);
}
function easyMode(){
    setColor();
    let row2 = document.getElementById('row2');
    row2.style.display = 'none';
    let x = Math.floor((Math.random()*3)+1);
    let correctBox = document.getElementById(`box${x}`);
    correctBox.style.backgroundColor = res;
    for(let i=1;i<4;i++)
    {
        if(i!=x)
        {
            let boxColor = newColor();
            let wrongBox = document.getElementById(`box${i}`);
            wrongBox.style.backgroundColor = boxColor;
        }
    }
}
function check(){
    // console.log(this.id);
    // console.log(res);
    // console.log(this.style.backgroundColor)
    let boxColor = this.style.backgroundColor;
    let header = document.getElementById('header');
    if(res === boxColor)
    {
        header.style.backgroundColor = res;
        for(let i=1;i<7;i++)
        {
            let box = document.getElementById(`box${i}`);
            box.style.backgroundColor = res;
        }
        let result = document.getElementById('result');
        result.innerHTML = "CORRECT!!!";
        result.style.color = "green"
        let newColorBtn = document.getElementById('new-color');
        newColorBtn.innerHTML = "PLAY AGAIN"
    }
    else
    {
        this.style.backgroundColor = "black";
        let result = document.getElementById('result');
        result.innerHTML = "TRY AGAIN";
        result.style.color = "red";
    }
}

let newColorBtn = document.getElementById('new-color');
newColorBtn.addEventListener('click',easyMode);

let hardBtn = document.getElementById('hard');
hardBtn.addEventListener('click',hardMode);

let easyBtn = document.getElementById('easy');
easyBtn.addEventListener('click',easyMode);

let box1 = document.getElementById('box1');
box1.addEventListener('click',check);

let box2 = document.getElementById('box2');
box2.addEventListener('click',check);

let box3 = document.getElementById('box3');
box3.addEventListener('click',check);

let box4 = document.getElementById('box4');
box4.addEventListener('click',check);

let box5 = document.getElementById('box5');
box5.addEventListener('click',check);

let box6 = document.getElementById('box6');
box6.addEventListener('click',check);

window.onload = function() {
    easyMode();
};