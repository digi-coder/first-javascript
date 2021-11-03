const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content');
content.textContent = 'Hey I’m red!';

container.appendChild(content);