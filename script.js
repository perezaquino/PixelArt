const input = document.querySelector('#color-field');

// console.log(input);

const setColor = document.querySelector('#set-color');

// console.log(setColor);

const brush = document.querySelector('.brush');

// console.log(brush)

const body = document.querySelector('body');

// console.log(body);

const random = document.querySelector('#randomButton');

setColor.addEventListener('click', () => {
  // console.log('this works!');
  brush.style.backgroundColor = input.value;
})

for (let i = 0; i < 8000; i++) {
  let div = document.createElement('div');
  div.classList.add('square');
  body.appendChild(div);

  div.addEventListener('mouseover', () => {
    div.style.backgroundColor = brush.style.backgroundColor;
  })
}


const colors = ['red', 'blue', 'orange', 'purple', 'magenta', 'wheat', 'violet', 'navy', 'yellow', 'lightblue', 'pink', 'darkgreen', 'aquamarine'];

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
}

random.addEventListener('click', () => {
  let num = getRandomNumber();
  let color = colors[num];
  random.style.backgroundColor = color;
  brush.style.backgroundColor = color;
})