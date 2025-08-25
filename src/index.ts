  /*
  Objective: 
    Write a function that will call a public API and display the "Title", and "Description". 
  e.g.
    Title: Piedmont Ave. bulletin. [volume] by Description: Piedmont Avenue Merchants Association 
 
  1. Examine the API (and its results), and design the required interaces or structure 
  2. Write a function that will call a public API and display the "Title", and "Description"
  
  Note: 
      Traverse through the nodes "content" then "results"
      You can use or "Import" your preferred  api data fetching library.
  */

import fetch from 'node-fetch';
 
async function fetchAndDisplayResults() {
  const apiUrl = 'https://www.loc.gov/collections/chronicling-america/?dl=title&fo=json&q=oakland&location_state=california';

  //your code here

  //note: use this format.
  //console.log(`Title: ${item.title} by Description: ${item.Description}`);
}

fetchAndDisplayResults();