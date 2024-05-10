


export const tryAgain =()=>{

  const body = document.querySelector('body');
  const main = document.querySelector('main');
 
  const searchEmpty = document.createElement('section');
  const again = document.createElement('div');
  const pAgain = document.createElement('p');
  pAgain.textContent = ' TRY AGAIN.....';


  searchEmpty.append(pAgain,again);
  main.append(searchEmpty);
  body.append(main);



}