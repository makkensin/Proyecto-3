


import'./nav.css'
import { objetLinks } from "../../../../UTILS/objetLinks";
import { link } from "./link";




export const printNavs = () =>{
  const header = document.querySelector('#header');
  const nav = document.createElement('nav');
  nav.classList = 'nav'; 
  nav.classList.add('flex-container')
  const ul = document.createElement('ul');
  ul.classList = 'ul-nav'; 
  ul.classList.add('flex-container');
  for (const links of objetLinks) {
    link(ul, links.text, links.hrefs);
  }
  nav.appendChild(ul)
  header.appendChild(nav)

}
