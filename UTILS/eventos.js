


import {  callDefault } from "../SRC/components/body/default/default";
import { callRandom } from "../SRC/components/body/random/random";
import { callSearch } from "../SRC/components/body/search/search";




export const eventos = () =>{

  const rand = document.querySelector('.rand');
  rand.addEventListener('click', () => {
    
    callRandom()
 })


 const delet = document.querySelector('.i-on');
 delet.addEventListener('click', () => {
  
   const randomBox = document.querySelector('.random-box');
   const searchBox = document.querySelector('.search-box')
   const input = document.querySelector('input');
   if (randomBox) {
     randomBox.remove();
    }if (searchBox) {
     input.value = '';
     searchBox.remove();
   }
   
   callDefault();
 });


 document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input');

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      let inputValue = input.value;
      callSearch(inputValue)
    }
  });
});


}











