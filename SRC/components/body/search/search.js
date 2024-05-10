

import'./search.css'
import { tryAgain } from './tryAgain';




const accesKey = 'hVFO06_ZyjRGFq90xH3sXZVgUz1k18SUYUyt-l2XGto';
const endPoint = 'https://api.unsplash.com/search/photos';

export const callSearch = (inputValue) => {
  fetch(`${endPoint}?per_page=20&query=${inputValue}&client_id=${accesKey}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let resultados = data.results
      if (resultados = []) {
        tryAgain()
      }
      searchPictures(resultados);
     
    })
    .catch((error) => {
      console.log(error);
    });
};

export const searchPictures = (array) => {
  
  const body = document.querySelector('body');
  const main = document.querySelector('main');
  main.innerHTML = '';
  const searchBox = document.createElement('section');
  searchBox.classList = 'search-box';
  searchBox.classList.add('flex-container');
  
  for (const picture of array) {
    const cardSearch = document.createElement('div');
    cardSearch.classList = 'card-search';
    const img = document.createElement('img');
    img.classList = 'img-search';
    img.src = picture.urls.regular;
    const parrafo = document.createElement('p');
    parrafo.classList = 'parrafo';
    parrafo.textContent = picture.alt_description;

    cardSearch.append(img, parrafo);
    searchBox.appendChild(cardSearch);
  }

  
  main.append(searchBox);
  body.append(main);
};


// document.addEventListener('DOMContentLoaded', () => {
//   const input = document.querySelector('.input');

//   input.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//       let inputValue = input.value;
//       searchBox.innerHTML = ''
//       callSearch(inputValue)
//     }
//   });
// });



  // const defaul = document.querySelector('.default-box');
      // const main = document.querySelector('main')
      // defaul.innerHTML = '';
      /// main.innerHTML = '';
      // callSearch(inputValue);

































// let keyword = '';

// const accesKey = 'hVFO06_ZyjRGFq90xH3sXZVgUz1k18SUYUyt-l2XGto';
// const endPoint = 'https://api.unsplash.com/search/photos';



// export const callSearch = () =>{



//   keyword = input.value;

//   fetch(`${endPoint}?per_page=20&query=${keyword}&client_id=${accesKey}`)
//   .then((res) => res.json())
//   .then((data)=>{
//    console.log(data);
//    let resultados = data.results
//    searchPictures(resultados)
  
     
//   })
  
//   .catch((error) =>{
//      console.log(error);
//     })
  
//   }



//  export const searchPictures = (array) =>{

//   const body = document.querySelector('body');
//   const main = document.createElement('main');

//   const searchBox = document.createElement('section');
//   searchBox.classList = 'search-box';
//   searchBox.classList.add('flex-container');

//   const input = document.querySelector('.input')

//   input.addEventListener('keydown', (e) =>{

//     if(e.key === 'Enter'){
      
//       const defaul = document.querySelector('.default-box');
//       defaul.innerHTML = '';
//       searchBox.innerHTML = '';

//       for (const picture of array) {
//         const cardSearch = document.createElement('div');
//         cardSearch.classList = 'card-search';
//         const img = document.createElement('img');
//         img.classList = 'img-search';
//         img.src = picture.urls.regular;
//         const parrafo = document.createElement('p')
//         parrafo.classList = 'parrafo'
//         parrafo.textContent = picture.alt_description;
        
//         cardSearch.append(img, parrafo)
//         searchBox.appendChild(cardRandom)
     
        
//       }
//       main.appendChild(searchBox)
//       body.appendChild(main)
//     }
//   })

//   }

