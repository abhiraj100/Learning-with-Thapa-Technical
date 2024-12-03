const fs = require('fs');

const bioData = {
    name : "abhiraj yadav",
    age : 22,
    channel : "thapa technical",
}

//  --Task to do--
// 1. convert to JSON
// 2. add this data into other file
// 3. readfile from the index2.js (this) 
// 4. again convert back to js obj originally
// 5. finally show in console.log()

// Step : 1
const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// Step : 2
fs.writeFile("13_jsonNodejs/json1.json", jsonData, (err) => {
    console.log("done");
    // if (err) throw err;  // Throw an error if there's an issue
    // console.log('File has been saved!');
});

// Step : 3
fs.readFile("13_jsonNodejs/json1.json", "utf-8", (err, data) => {
    // console.log(data); 
    // Step : 4  -> convert it into original objectData
    const originalData = JSON.parse(data);
    // Step : 5  -> show in console
    console.log(data);  // JSON Data
    console.log(originalData);  // In Object form Data
});



// {"name":"abhiraj yadav","age":22,"channel":"thapa technical"}
// { name: 'abhiraj yadav', age: 22, channel: 'thapa technical' }


