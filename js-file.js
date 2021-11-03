const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content');
content.style.color = "Red";
content.textContent = 'Hey I’m red!';

container.appendChild(content);


const contenth3 = document.createElement('h3');
contenth3.classList.add('contenth3');
contenth3.style.color = "Blue";
contenth3.textContent = 'I’m a blue h3!';

container.appendChild(contenth3);


const contentdiv = document.createElement('div');
contentdiv.style.border = "2px solid black";
contentdiv.style.backgroundColor = "Pink";

const contenth1 = document.createElement('h1');
contenth1.textContent = 'I’m in a div';

const contentp = document.createElement('p');
contentp.textContent = 'ME TOO!';

contentdiv.appendChild(contenth1);
contentdiv.appendChild(contentp);

container.appendChild(contentdiv);

// const contenth1 = document.createElement('h1');
// contenth1.classList.add('contenth1');
// contenth1.textContent = 'I’m in a div';

// container.appendChild(contenth1);

