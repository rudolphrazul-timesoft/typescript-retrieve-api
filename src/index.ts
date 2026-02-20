/*
  Note: 
  - You can use or "Import" your preferred  api data fetching library.

  Objective: 
    Write a function that will call a public API and display the "title", and "url". 
  e.g.
    Title: Chronicling America: A Guide for Researchers. by Url: https://guides.loc.gov/chronicling-america/ 
 
  1. Examine the API (and its results), and design the required interaces or structure 
     Note: Traverse through the node "expert_resources"
     
  2. Write a function that will call a public API and display the "Title", and "Url"
*/

import fetch from "node-fetch";

async function fetchAndDisplayResults() {
  const apiUrl =
    "https://www.loc.gov/collections/chronicling-america/?dl=title&fo=json&q=oakland&location_state=california";
  //your code here
  
  

  //note: use this format.
  //console.log(`Title: ${item.title} by Publisher: ${item.url}`);
  
}

fetchAndDisplayResults();