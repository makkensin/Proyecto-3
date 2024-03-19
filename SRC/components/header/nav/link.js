


export const link = (ul, text, hrefs) =>{
  
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = text;
  a.href = hrefs;
  li.appendChild(a);

  ul.appendChild(li);

}
