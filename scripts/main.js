// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'toto';

// document.querySelector('html').onclick = function() {
//     alert('OH, Stop spoking me!');
// }

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let myScr = myImage.getAttribute('src');
    if (myScr === 'images/img-1.jpg'){
        myImage.setAttribute('src', 'images/img-2.jpg');
    }
    else{
        myImage.setAttribute('src', 'images/img-1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading =document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name: ');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Mozilla in cool, "+myName;
}

if (!localStorage.getItem('name')){
    setUserName()
}
else{
    let storeName = localStorage.getItem('name');
    myHeading.textContent = "Mozilla in cool, "+storeName;
}

myButton.onclick = function(){
    setUserName();
}