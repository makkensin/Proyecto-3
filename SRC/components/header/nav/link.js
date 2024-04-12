


export const link = (ul, text, hrefs, component, color) =>{
  
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = text;
  a.href = hrefs;
  a.style.color = color;
  li.appendChild(a);
 

  ul.appendChild(li);

}
