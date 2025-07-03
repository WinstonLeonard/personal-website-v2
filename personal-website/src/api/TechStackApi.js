import axios from 'axios';
import { apiUrl } from './ApiUrl';

const fetchFrontEnd = async () => {
  try {
    const url = `${apiUrl}/api/techstacks/type/FRONTEND`;  // Your API URL
    // Use fetch to make the GET request
    const response = await fetch(url);  // Sending GET request to the URL

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    // Parse the response as JSON (since your API likely returns JSON data)
    console.log(response);
    const data = await response.json();

    console.log(data);  // Handle the response data
    return data;  // Return the parsed data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;  // Re-throw to handle it in the calling component
  }
};


export {fetchFrontEnd}