  /*
  Objective: Write a function that will call a public API and display the "Title", and "Publisher"
  e.g.
    Title: Piedmont Ave. bulletin. [volume] by Publisher: Piedmont Avenue Merchants Association
    Title: Piedmont Avenue District bulletin. [volume] by Publisher: Piedmont Press
    Title: Piedmont District bulletin. [volume] by Publisher: Piedmont Press
 
  1. Examine the API (and its results), and design the required interaces or structure 
  2. Write a function that will call a public API and display the "Title", and "Publisher"
  
  Note: you can use or "Import" your preferred  api data fetching library.
  */

import fetch from 'node-fetch';
 
async function fetchAndDisplayResults() {
  const apiUrl = 'https://chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json&page=5';

  //your code here

  //note: use this format.
  //console.log(`Title: ${item.title} by Publisher: ${item.publisher}`);
}

fetchAndDisplayResults();