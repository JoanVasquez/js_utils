const fs = require("fs");

const promise = new Promise(function (resolve, reject) {
  fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) reject("An error happened");
    else resolve(data);
  });
});

promise.then((data) => console.log(data));
