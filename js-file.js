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

//buttons

//button2
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert("Hello World");

//button3
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert("Hello World");
});

//button4 with function 
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

  btn3.addEventListener('click', function (e) {
    console.log(e);
  });

  btn2.addEventListener('click', function (e) {
    //console.log(e.target);
    e.target.style.background = 'blue';
  });

  //nodelist
  // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
    buttons.forEach((button) => {

  // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
    });