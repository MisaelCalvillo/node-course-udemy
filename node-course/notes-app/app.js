const fs = require('fs');

// fs.writeFileSync('notes.txt','This file was created by nodejs');


// Challenge: Append a message to notes.txt

// 1.Use appendFileSync to append to the file.
// 2. Run the script.
// 3. Check your work by opening the file and viewing the appended text

try {
  fs.appendFileSync('notes.txt', ' My name is Misa!');
  console.log("File appended !!");
} catch (err) {
  console.log("The file couldn't be appended!!")
}