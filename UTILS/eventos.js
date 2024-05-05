


import {  callDefault } from "../SRC/components/body/default/default";
import { callRandom } from "../SRC/components/body/random/random";




export const eventos = () =>{

  const rand = document.querySelector('.rand');
  rand.addEventListener('click', () => {
    
    callRandom()
 })


 const delet = document.querySelector('.i-on');
 delet.addEventListener('click', () => {
  
   const randomBox = document.querySelector('.random-box');
   randomBox.remove();
   
   callDefault();
 });
}











