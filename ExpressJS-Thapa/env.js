import {z} from "zod";

// # coerce is a method which is used to convert string into number.
const portSchema = z.coerce.number().min(1).max(65535).default(3000);
export const PORT = portSchema.parse(process.env.PORT);


// // export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

// import { z, ZodError } from "zod";

// const ageSchema = z.number().min(18).max(100).int();
// // const userAge = 19;
// const userAge = 17;

// // First way
// // const parseUserAge = ageSchema.parse(userAge);
// // console.log(parseUserAge);


// // // Second way
// // try {
// //     const parseUserAge = ageSchema.parse(userAge);
// //     console.log(parseUserAge);
// // } catch (error) {
// //     // instanceof is a Javascript operator used to check if an object is an instance of a specific class or constructor.
// //     if(error instanceof ZodError){
// //         // console.log(error.issues[0].message); // Display error message only
// //         console.log(error.errors[0].message); // Display error message only
// //     } else {
// //         console.log("Unexpected error:", error);
// //     }
// // }


// // Third way
// const parseUserAge = ageSchema.parse(userAge);
// // in safeParse we individually access 
// const {data, error, success} = ageSchema.safeParse(userAge);
// // console.log(data);
// console.log(success);
// console.log(error)