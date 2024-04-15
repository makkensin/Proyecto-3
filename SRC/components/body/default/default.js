

import './default.css'


const accesKey = 'hVFO06_ZyjRGFq90xH3sXZVgUz1k18SUYUyt-l2XGto';
const endPoint = 'https://api.unsplash.com/photos/?';


export const callDefault = () => {

  fetch(`${endPoint}client_id=${accesKey}`)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    defaultPicture(res);
  })

}


export const defaultPicture = (array) =>{

  const body = document.querySelector('body');
  const main = document.createElement('main');
  const defaultBox = document.createElement('section');
  defaultBox.innerHTML = '';
  defaultBox.classList = 'default-box';
  defaultBox.classList.add('flex-container');

 for (const picture of array) {
   const cardDefault = document.createElement('div');
   cardDefault.classList = 'card-default';
   const img = document.createElement('img');
   img.classList = 'img-default';
   img.src = picture.urls.regular;
   const parrafo = document.createElement('p')
   parrafo.classList = 'parrafo'
   parrafo.textContent = picture.alt_description;
   
   cardDefault.append(img, parrafo)
   defaultBox.appendChild(cardDefault)

  }

  main.appendChild(defaultBox)
  body.appendChild(main)
}

