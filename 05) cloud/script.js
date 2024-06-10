
function randomText(){
    var text=("!@#%^&*()_+=-")
    letter = text[Math.floor(Math.random()* text.length)]
    return letter
}

function rain(){
    let cloud = document.querySelector('.cloud')
    let e = document.createElement('div')

// creating class = cloud in div
    e.classList.add('drop')
    cloud.appendChild(e)

// Rain drops
let left = Math.floor(Math.random() *290);
let size = Math.random() *1.5;
let duration = Math.random() *1;

// drops style
e.innerText= randomText()
e.style.left=left+'px'
e.style.fontSize= 0.5 +size+'em'
e.style.animationDuration = 1+duration+'s'

// removing the drop
setTimeout(function(){
    cloud.removeChild(e);

}, 2000);

}

// calling drop
setInterval(function(){
    rain()
},20);























