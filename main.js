
// Top Navbar

let button = document.querySelector('.icon4');
let list = document.querySelector('.list');
let right = document.querySelector('.right');
let df = document.querySelector('.df');
let container = document.querySelector('.container');

button.addEventListener('click', function(){
    list.classList.toggle('new-list');
    right.classList.toggle('new-right');
    button.classList.toggle('new-icon4');
    df.classList.toggle('new-df');
    container.classList.toggle('new-container');
});