// Import the required types (this is optional in TypeScript but can be useful for type checking)
import fetch from 'node-fetch';

// Define interfaces for the expected structure of the API response
interface NewspaperItem {
  title: string;
  publisher: string;  
  // Add other fields based on the actual response structure if needed
}

interface ApiResponse {
  items: NewspaperItem[];
  // Add other fields based on the actual response structure if needed
}

async function fetchAndDisplayResults() {
  const apiUrl = 'https://chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json&page=5';

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Use a type assertion to specify the type of the JSON response
    const data = await response.json() as ApiResponse;
    //console.log('API Response:', data);

    // If you have a specific structure, you can iterate over the results
    if (data && data.items) {
      data.items.forEach((item: NewspaperItem) => {
        console.log(`Title: ${item.title} by Publisher: ${item.publisher}`);
        // Log other fields as necessary
      });
    } else {
      console.log('No items found in the response.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function
fetchAndDisplayResults();