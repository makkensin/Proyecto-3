
import'./logos.css'

export const printLogos = () => {

  const body = document.querySelector('body');
  const header = document.createElement('header');
  header.id = 'header';
  header.classList = 'flex-container'
  
  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.classList.add('flex-container')  
  const imgLogo1 = document.createElement ('img');
  imgLogo1.src = './public/pinter-1.png';
  imgLogo1.alt = 'logo pinterest'
  const imgLogo2 = document.createElement('img');
  imgLogo2.src = './public/pinter-2.png';
  imgLogo2.alt = 'logo2 pinterest'
  const explorar = document.createElement('p')
  explorar.className = 'explorar';

  explorar.textContent = 'Explorar';
  explorar.addEventListener('click', ()=>{
    setTimeout(() => {
      const input = document.querySelector('.input')
      const i = document.querySelector('.i');
      input.classList.toggle('on');
      i.classList.toggle('i-on');
      
    }, 500);
  })


  logo.appendChild(imgLogo1)
  logo.appendChild(imgLogo2)
  logo.appendChild(explorar)

    header.appendChild(logo)

    body.appendChild(header)

}