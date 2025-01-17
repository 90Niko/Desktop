function create(words) {
   const contentDivEl = document.getElementById('content');

   function createWordStructure(word) {

      const pEl = document.createElement('p');
      const divEl = document.createElement('div');

      pEl.textContent = word;
      pEl.style.display = 'none';

      divEl.appendChild(pEl);

      return divEl;
   }

   words.forEach(word => {
      const divEL =createWordStructure(word);

      divEL.addEventListener('click', (event)=>{

         event.target.querySelector('p').style.display='block';

         // event.target.children[0].style.display='block';
         // divEL.children[0].style.display='block';
      });

      contentDivEl.appendChild(divEL);

   });
}