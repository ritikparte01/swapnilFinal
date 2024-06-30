const publicKey = 'public_IOKj/oztoURiVy7mFGCJhzZ5zoc='; // Replace with your ImageKit.io public key
const urlEndpoint = 'https://ik.imagekit.io/teamsnappify'; // Replace with your ImageKit.io URL endpoint
const folderPath = '/swapnil/CorporateandRealEstate/'; // Replace with your folder path in ImageKit.io

fetch(`${urlEndpoint}/files/list${folderPath}`, {
  headers: {
    Authorization: `Basic ${btoa(`${publicKey}:`)}`
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  // Process the list of images returned by ImageKit.io
  console.log(data); // Check the structure of the data returned
  // Display images or do further processing here
})
.catch(error => console.error('Error fetching images:', error));

console.log('testttttttt');
