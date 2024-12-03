// JSON stands for Javascript Object Notation.
// JSON is a lightweight format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.

const bioData = {
    name : "abhiraj",
    age : 22,
    channel : "thapa technical",
}

// JSON Format/Data => {"name":"abhiraj","age":22,"channel":"thapa technical"}

// convert object into json -> we use JSON.stringify(objectName)
const jsonData = JSON.stringify(bioData);
console.log(jsonData);  // {"name":"abhiraj","age":22,"channel":"thapa technical"}
console.log(jsonData.channel);   // undefined


// convert JSON data into Object data -> we use JSON.parse(jsonDataName)
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(objData.name);
console.log(objData.channel);
console.log(objData.age);

// Object Format/Data => { name: 'abhiraj', age: 22, channel: 'thapa technical' }



// console.log(bioData.channel);
// console.log(bioData.name);


