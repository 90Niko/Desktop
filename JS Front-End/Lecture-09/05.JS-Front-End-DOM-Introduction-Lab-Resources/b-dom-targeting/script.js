const moveListElement = document.getElementById('movie-list');
console.log(moveListElement.textContent);

const moveListElement2 = document.getElementsByClassName('heading');
console.log(moveListElement2);
console.log(moveListElement2[0]);

for (let i = 0; i < moveListElement2.length; i++) {
    console.log(moveListElement2[i]);
}

//by tag name
const moveListElement3 = document.getElementsByTagName('li');
console.log(moveListElement3);

//by css selector
const moveListElement4 = document.querySelector('#movie-list li:last-child');
console.log(moveListElement4.textContent);

const moveListElement5 = document.querySelectorAll('#movie-list li');
console.log(moveListElement5);

//convert nodelist or html collection to array

const allElement = Array.from(moveListElement5);
console.log(allElement);

