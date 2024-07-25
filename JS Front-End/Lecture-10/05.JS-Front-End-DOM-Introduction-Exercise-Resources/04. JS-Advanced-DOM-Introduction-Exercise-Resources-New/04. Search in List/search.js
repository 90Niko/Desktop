function search() {
   let searchElement = document.getElementById('searchText').value;
   let towns = document.querySelectorAll('ul#towns li');
   let result = document.getElementById('result');
   let matches = 0;

   for (let town of towns) {
      if (town.textContent.toLowerCase().includes(searchElement.toLowerCase())) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   }

   result.textContent = `${matches} matches found`;
}
