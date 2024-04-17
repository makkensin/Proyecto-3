


export const link = (ul, text, hrefs, color, clase) =>{
  
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = text;
  a.href = hrefs;
  a.classList = clase;
  a.style.color = color;
  
  li.appendChild(a);
 

  ul.appendChild(li);

}
