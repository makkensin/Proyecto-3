

import'./search.css'




const accesKey = 'hVFO06_ZyjRGFq90xH3sXZVgUz1k18SUYUyt-l2XGto';
const endPoint = 'https://api.unsplash.com/search/photos';
let query = '';


export const callSearch = (query) =>{

  fetch(`${endPoint}?page=1&query=${query}&client_id=${accesKey}`)
  .then((res) => res.json())
  .then((data)=>{
      console.log(data.results);
      searchPictures(data.results)
     
  })
  
  .catch((error) =>{
     console.log(error);
    })
  
  }

export const searchPictures = (array) =>{

  const body = document.querySelector('body');
  const main = document.createElement('main');
  const input = document.querySelector('.input');
  const searchBox = document.createElement('section');
  searchBox.innerHTML = '';
  searchBox.classList = 'search-box';
  searchBox.classList.add('flex-container');


  for (const picture of array) {
    const cardSearch = document.createElement('div');
    cardSearch.classList = 'card-search';
    const img = document.createElement('img');
    img.classList = 'img-search';
    img.src = picture.urls.regular
    
    cardSearch.appendChild(img)
    searchBox.appendChild(cardSearch)
  }


}



