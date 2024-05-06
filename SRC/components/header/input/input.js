

import'./input.css'

export const printInput = () => {
  const header = document.querySelector('#header');
  const divInput = document.createElement('div');
  divInput.classList = 'div-input';
  divInput.classList.add('flex-container');
  const i = document.createElement('div');
  i.classList = 'i i-on';
  const iImg = document.createElement('img');
  iImg.classList = 'i-img';
  iImg.src ='/skull.png';
  
  const input = document.createElement('input');
  input.classList = 'input on';
  input.type = 'text';
  input.placeholder = ''
 
  divInput.appendChild(input)
  i.appendChild(iImg)
  divInput.appendChild(i);
  header.appendChild(divInput)
 
 }



//  const header = document.querySelector('#header');
//  const divInput = document.createElement('div');
//  divInput.classList = 'div-input';
//  divInput.classList.add('flex-container');
//  const i = document.createElement('div');
//  i.classList = 'i';
//  const iImg = document.createElement('img');
//  iImg.classList = 'i-img';
//  iImg.src ='./public/skull.png';
 
//  const input = document.createElement('input');
//  input.classList = 'input';
//  input.type = 'text';
//  input.placeholder = ''

//  divInput.appendChild(input)
//  i.appendChild(iImg)
//  divInput.appendChild(i);
//  header.appendChild(divInput)