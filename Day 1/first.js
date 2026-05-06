let data = "writing in the file\nhurray!";

const fs = require('fs');

fs.writeFile('output.txt', data, (error) => {
  if (error) {
    console.log('some error occured');
  } else {
    console.log('file written successfully');
  }
});
