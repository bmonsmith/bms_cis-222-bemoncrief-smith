const readline = require("readline");
var fs = require('fs');
var express = require('express');
var app = express();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ?: ", function(name) {
    rl.question("Please type number from 1 to 100.: ", function(number) {
        console.log(` ${name}, Hello user! ${number} `);
        if (number <= 0 | number >= 100){
            console.log('invalid input');
            throw err
        }
        fs.appendFile('myUser.txt', ` ${name}, Hello user! ${number} ` + '\r\n', function (err) {
            if (err) {
                console.log('File type does not exsit');
                 throw err
            }
           
            console.log('User input Saved!');
            rl.close();
          });
    });
});

rl.on("close", function() {
    console.log("Enjoy The Game!!!");

});


app.use(express.static('./public'));
app.listen(3000);
