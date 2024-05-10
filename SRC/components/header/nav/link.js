


export const link = (ul, text, hrefs, color, clase, targets) =>{
  
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = text;
  a.href = hrefs;
  a.classList = clase;
  a.style.color = color;
  a.target = targets;
 
  li.appendChild(a);
 

  ul.appendChild(li);

}
