//grab elements
const container = document.querySelector('#container')
const blackBtn = document.querySelector('.black');
const rainbowbtn = document.querySelector('.rainbow');
//create grid

function createDivs (col, rows) {
    for(let i = 0; i < (col * rows); i++){
        const div = document.createElement('div')
        div.style.border = '1px solid red'
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;   
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`; 
        container.appendChild(div).classList.add('box')
    } 
 }
 createDivs(16, 16)

 //turn grid black
 function black() {
    const gridBox = container.querySelectorAll('.box')
 blackBtn.addEventListener('click', ()=>{
    
    gridBox.forEach(box => box.addEventListener('mouseover', ()=>{
        box.style.background = 'black'
        
    }))
 })
 }
 black()
//turn rainbow

function rainbow() {
    const gridBox = container.querySelectorAll('.box')
 rainbowbtn.addEventListener('click', ()=>{
    
    gridBox.forEach(box => box.addEventListener('mouseover', ()=>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16)
        box.style.background = "#" + randomColor;
        console.log('hello')
    }))
 })
 }
 rainbow()