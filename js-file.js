const container = document.querySelector('#container');

const paragraph = document.createElement('p');
const h3 = document.createElement('h3');
paragraph.style.color = 'red';
paragraph.textContent = 'Hello, Im a red paragraph';
h3.style.color = 'blue';
h3.textContent = 'Im a blue title';

container.appendChild(paragraph);
container.appendChild(h3);