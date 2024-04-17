

import './default.css'


const accesKey = 'hVFO06_ZyjRGFq90xH3sXZVgUz1k18SUYUyt-l2XGto';
const endPoint = 'https://api.unsplash.com/photos?20-Per-Page&';


export const callDefault = () => {

  fetch(`${endPoint}client_id=${accesKey}`)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    defaultPicture(res);
  })

  .catch((error) =>{
    console.log(error);
   })

}


export const defaultPicture = (array) =>{

  const body = document.querySelector('body');
  const main = document.createElement('main');
  const defaultBox = document.createElement('section');
  defaultBox.innerHTML = '';
  defaultBox.classList = 'default-box';
  defaultBox.classList.add('grid-container');

  for (let i = 0; i < array.length; i++) {
   const picture = array[i];
   const cardDefault = document.createElement('div');
   cardDefault.classList = 'card-default';
   const img = document.createElement('img');
   img.classList = 'img-default';
   img.src = picture.urls.regular;
   const parrafo = document.createElement('p')
   parrafo.classList = 'parrafo'
   parrafo.textContent = picture.alt_description;
   if (i === 0 || i === 5 || i === 9) {
     cardDefault.classList.add('wide')
   }if(i === 2){
    cardDefault.classList.add('tall')
   }
   
   cardDefault.append(img, parrafo)
   defaultBox.appendChild(cardDefault)

  }

  main.appendChild(defaultBox)
  body.appendChild(main)
}

