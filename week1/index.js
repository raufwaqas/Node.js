var fs = require('fs');

// writing the file first method
fs.appendFile('file.txt', arg.join(''), function (err) {
  if (err) throw err;
  console.log('File created');
})

// writing the file second method
var args = process.argv(2)
fs.open('file.txt'), 'W', function (err, file) {
  if (err) throw err;
  fs.write(file, arg.join(''), function (er) {
    console.log('Saved!');
  })
  
}

// writing the file third method

var fs = require('fs');
fs.writeFile('file3.txt', 'hello', function  (err) {
  iff (err) throw err; 
  console.log('save with fs.writefile!');
  // body
})