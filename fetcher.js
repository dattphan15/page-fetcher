// Programmed with Peer Mentor Marisa Doig

// Implement a small command line node app which should take a URL as a command-line argument
// as well as a local file path and download the resource to the specified path.

// Use the request library to make the HTTP request
// Use Node's fs module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions

const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);
const url = args[0];
const localPath = args[1];

// command line argument with URL and Local File PATH as arugments
// Download the resource with given command line arguments
// Upon completion should print message to terminal

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  }
  fs.writeFile(localPath, body, error => {
    if (error) {
      console.log('error:', error);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
  });
});