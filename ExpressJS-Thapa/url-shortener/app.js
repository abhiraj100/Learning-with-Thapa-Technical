// Required modules
import express from "express";
const app = express();
// import router from "./routes/urlShortener.route.js";
import { shortenerRoutes } from "./routes/urlShortener.route.js"

// Constants
const PORT = process.env.PORT || 3300;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// express router
// app.use(router);
app.use(shortenerRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});



// // Required modules
// import { readFile, writeFile, mkdir } from "fs/promises";
// import path from "path";
// import crypto from "crypto";
// import express from "express";

// const app = express();

// // Constants
// const PORT = 3300;
// const DATA_FILE = path.resolve(import.meta.dirname, "data", "links.json");
// // const PUBLIC_DIR = path.resolve(import.meta.dirname, "public");

// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));

// // Helper function to ensure the data directory exists
// const ensureDataDirectoryExists = async () => {
//   try {
//     await mkdir(path.dirname(DATA_FILE), { recursive: true });
//   } catch (error) {
//     console.error("Error creating data directory:", error);
//   }
// };

// // Helper function to serve static files
// const serveFile = async (res, filePath, contentType) => {
//   try {
//     const data = await readFile(filePath);
//     res.writeHead(200, { "Content-Type": contentType });
//     res.end(data);
//   } catch (error) {
//     console.error("File serving error:", error);
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 Page Not Found");
//   }
// };

// // Function to load links from the JSON file
// const loadLinks = async () => {
//   try {
//     const data = await readFile(DATA_FILE, "utf-8");
//     return JSON.parse(data);
//   } catch (error) {
//     if (error.code === "ENOENT") {
//       console.log("Creating new links.json file");
//       await writeFile(DATA_FILE, JSON.stringify({}), "utf-8");
//       return {};
//     }
//     console.error("Error reading links.json:", error);
//     throw error;
//   }
// };

// // Function to save links to the JSON file
// const saveLinks = async (links) => {
//   try {
//     await writeFile(DATA_FILE, JSON.stringify(links, null, 2), "utf-8");
//   } catch (error) {
//     console.error("Error saving links.json:", error);
//     throw error;
//   }
// };

// // Initialize links data
// let links = {};
// (async () => {
//   await ensureDataDirectoryExists();
//   links = await loadLinks();
// })();

// app.get("/", async (req, res) => {
//   try {
//     const file = await readFile(path.join("views", "index.html"));
//     const links = await loadLinks();

//     const content = file.toString().replaceAll(
//       "{{ shortened_urls }}",
//       Object.entries(links)
//         .map(
//           ([shortCode, url]) =>
//             `<li><a href="/${shortCode}" target="_blank">${req.host}/${shortCode} </a> -  ${url} </li>`
//         )
//         .join("")
//     );

//     return res.send(content);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send("Internal Server Error");
//   }
// });

// app.post("/", async (req, res) => {
//   try {
//     const { url, shortCode } = req.body;

//     const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

//     const links = await loadLinks();

//     if (links[finalShortCode]) {
//       return res
//         .status(400)
//         .send("Short code already exists. Please choose another.");
//     }

//     links[finalShortCode] = url;

//     await saveLinks(links);
//     return res.redirect("/");
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send("Internal Server Error");
//   }
// });

// app.get("/:shortCode", async (req, res) => {
//   try {
//     const { shortCode } = req.params;
//     const links = await loadLinks();

//     if (!links[shortCode]) return res.status(404).send("404 error occurred");

//     return res.redirect(links[shortCode]);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send("Internal Server Error");
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });
