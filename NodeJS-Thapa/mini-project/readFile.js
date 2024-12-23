// import readline from "readline";
// import fs from "fs";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const fileRead = () => {
//   rl.question("Enter the fileName : ", (filename) => {
//     if (fs.access(`${filename}.txt`)) {
//       fs.readFile(`${filename}.txt`, "utf-8", (err, data) => {
//         if (err) {
//           console.error("there is something wrong : ", err.message);
//         } else {
//           console.log("Here is the file data : ", data);
//         }
//         rl.close();
//       });
//     } else {
//         rl.question("Enter the content for your file : ", (content) => {
//             fs.writeFile(`${filename}.txt`, content, (err) => {
//                 if(err) {
//                     console.error("Oops something went wrong : ", err.message)
//                 } else {
//                     console.log(`File ${filename}.txt created successfully `)
//                 }
//                 rl.close();
//             })

//         })
//     }
//   });
// };

// fileRead();


import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileRead = () => {
  rl.question("Enter the fileName: ", (filename) => {
    try {
      // Check if the file exists synchronously
      fs.accessSync(`${filename}.txt`, fs.constants.F_OK);

      // If the file exists, read it
      const data = fs.readFileSync(`${filename}.txt`, "utf-8");
      console.log("Here is the file data:", data);
      rl.close();
    } catch (err) {
      // If the file doesn't exist, create it
      rl.question("Enter the content for your file: ", (content) => {
        try {
          fs.writeFileSync(`${filename}.txt`, content);
          console.log(`File ${filename}.txt created successfully.`);
        } catch (err) {
          console.error("Oops something went wrong:", err.message);
        }
        rl.close();
      });
    }
  });
};

fileRead();

