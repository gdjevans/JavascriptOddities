const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;

const listItemElements = document.querySelectorAll('li');

for (const listItemEl of listItemElements) {
    console.dir(listItemEl);
}


const firstGoal = document.createElement('li');
firstGoal.textContent = 'Learn JavaScript';
document.querySelector('ul').appendChild(firstGoal)
    
const secondGoal = document.createElement('li');
secondGoal.textContent = 'Master JavaScript';
document.querySelector('ul').appendChild(secondGoal);
