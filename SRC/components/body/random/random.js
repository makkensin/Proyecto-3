


import './random.css'

const accesKey = 'hVFO06_ZyjRGFq90xH3sXZVgUz1k18SUYUyt-l2XGto';
const endPoint = 'https://api.unsplash.com/photos/';


export const callRandom = () =>{
  fetch(`${endPoint}/random?count=20&client_id=${accesKey}`)
  .then((res) => res.json())
  .then((data)=>{
     console.log(data);
     randomPicture(data)
  })
  
  .catch((error) =>{
     console.log(error);
    })
  
  }

export const randomPicture = (array) => {
  
  
  const body = document.querySelector('body');
  const main = document.createElement('main');
  const randomBox = document.createElement('section');
  randomBox.innerHTML = '';
  randomBox.classList = 'random-box';
  randomBox.classList.add('flex-container');

 for (const picture of array) {
   const cardRandom = document.createElement('div');
   cardRandom.classList = 'card-random';
   const img = document.createElement('img');
   img.classList = 'img-random';
   img.src = picture.urls.regular;
   const parrafo = document.createElement('p')
   parrafo.classList = 'parrafo'
   parrafo.textContent = picture.alt_description;
   
   cardRandom.append(img, parrafo)
   randomBox.appendChild(cardRandom)

  }

  main.appendChild(randomBox)
  body.appendChild(main)


}




