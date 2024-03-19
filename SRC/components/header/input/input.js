

import'./input.css'
export const printInput = () => {
  const header = document.querySelector('#header');
  const divInput = document.createElement('div');
  divInput.classList = 'div-input';
  divInput.classList.add('flex-container');
  const input = document.createElement('input');
  input.classList = 'input';
  input.placeholder = 'Buscar...'
 
  divInput.appendChild(input)
  header.appendChild(divInput)
 
 }