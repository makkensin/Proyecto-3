

import './footer.css';


export const renderFooter = () =>{

  const body = document.querySelector('body');
  
  const footer = document.querySelector('footer')
  footer.id = 'footer'
  footer.innerHTML =`
        <section class="footer-section">
            <h3 class="nombre">Jorge Gómez Gónzalez</h3>
            <p class="profesion">Desarrollador FULLSTACK</p>
        </section>
  `
 body.append(footer)
 

}
