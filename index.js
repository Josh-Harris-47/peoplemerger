var fs = require('fs');

var array = [];
var array1 = JSON.parse(fs.readFileSync('./people1.json'))
for(var i = 0; i < array1.length; i++) {
    array.push(array1[i])
}
var array2 = JSON.parse(fs.readFileSync('./people2.json'))
for(var j = 0; j < array2.length; j++) {
    array.push(array2[j])
}

// console.log(array.sort());
var filepath = "peopleComplete.txt";
var fileContent = array.sort();

var newFile = function ()
  {
    fs.writeFile(filepath, fileContent, (err) => {
      if (err) throw err;
      console.log("The file was succesfully saved!");
    });
  };
  newFile();