
// using sync code

const fs = require("fs")

fs.writeFileSync("sync.txt", "This file created with sync ");

// fs.unlinkSync("sync.txt")

// using Async code with useCallback

fs.writeFile('async-callback.txt', 'This file created with Async callback', (err) => {
  if (err) {
    return console.error('Error creating file:', err);
  }
  console.log('File created successfully with async / callback.');
});


// fs.unlinkSync("async-callback.txt")



// using Async with async\await 

const ff = require('fs').promises;

async function createFile() {

  try {
    await ff.writeFile('async-await.txt', 'This file created with Async / await');
    console.log('File created successfully with async / await.');
  } catch (error) {
    console.error('Error creating file:', error);
  }
}

createFile();

// fs.unlinkSync("async-await.txt")




