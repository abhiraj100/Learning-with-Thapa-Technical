// Required modules
import http from "http";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import crypto from "crypto";

// Constants
const PORT = 3300;
const DATA_FILE = path.resolve(__dirname, "data", "links.json");
const PUBLIC_DIR = path.resolve(__dirname, "public");

// Helper function to ensure the data directory exists
const ensureDataDirectoryExists = async () => {
  try {
    await mkdir(path.dirname(DATA_FILE), { recursive: true });
  } catch (error) {
    console.error("Error creating data directory:", error);
  }
};

// Helper function to serve static files
const serveFile = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (error) {
    console.error("File serving error:", error);
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
  }
};

// Function to load links from the JSON file
const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("Creating new links.json file");
      await writeFile(DATA_FILE, JSON.stringify({}), "utf-8");
      return {};
    }
    console.error("Error reading links.json:", error);
    throw error;
  }
};

// Function to save links to the JSON file
const saveLinks = async (links) => {
  try {
    await writeFile(DATA_FILE, JSON.stringify(links, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving links.json:", error);
    throw error;
  }
};

// Initialize links data
let links = {};
(async () => {
  await ensureDataDirectoryExists();
  links = await loadLinks();
})();

// HTTP server
const server = http.createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      return serveFile(res, path.join(PUBLIC_DIR, "index.html"), "text/html");
    } else if (req.url.startsWith("/public/")) {
      const filePath = path.join(PUBLIC_DIR, req.url.replace("/public/", ""));
      const ext = path.extname(filePath).toLowerCase();
      const contentType =
        ext === ".css"
          ? "text/css"
          : ext === ".js"
          ? "application/javascript"
          : "text/plain";
      return serveFile(res, filePath, contentType);
    } else {
      const shortCode = req.url.slice(1);
      if (links[shortCode]) {
        res.writeHead(302, { Location: links[shortCode] });
        return res.end();
      }
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("Short URL not found");
    }
  }

  if (req.method === "POST" && req.url === "/shorten") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      try {
        const { url, shortCode } = JSON.parse(body);

        if (!url) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          return res.end("URL is required");
        }

        const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

        if (links[finalShortCode]) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          return res.end("Short code already exists. Please choose another.");
        }

        links[finalShortCode] = url;
        await saveLinks(links);

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));
      } catch (error) {
        console.error("Error processing POST request:", error);
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("Invalid JSON format in request body");
      }
    });
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});



// import { createServer } from "http";
// import { readFile, writeFile } from "fs/promises";
// import crypto from "crypto";
// import path from "path";

// const PORT = 3300;
// const DATA_FILE = path.join("data", "links.json");

// const serveFile = async (res, filePath, contentType) => {
//   try {
//     const data = await readFile(filePath);
//     res.writeHead(200, { "Content-Type": contentType });
//     res.end(data);
//   } catch (error) {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 Page Not Found");
//   }
// };

// const loadLinks = async () => {
//   try {
//     const data = await readFile(DATA_FILE, "utf-8");
//     return JSON.parse(data);
//   } catch (error) {
//     if (error.code === "ENOENT") {
//       await writeFile(DATA_FILE, JSON.stringify({}));
//       return {};
//     }
//     throw error;
//   }
// };

// const saveLinks = async (links) => {
//   await writeFile(DATA_FILE, JSON.stringify(links));
// };

// const server = createServer(async (req, res) => {
//   if (req.method === "GET") {
//     if (req.url === "/") {
//       return serveFile(res, path.join("public", "index.html"), "text/html");
//     } else if (req.url === "/style.css") {
//       return serveFile(res, path.join("public", "style.css"), "text/css");
//     } else if (req.url === "/links") {
//       const links = await loadLinks();

//       res.writeHead(200, { "Content-Type": "application/json" });
//       return res.end(JSON.stringify(links));
//     } else {
//       const links = await loadLinks();
//       const shortCode = req.url.slice(1);
//       console.log("links redirect.", req.url);
//       if (links[shortCode]) {
//         res.writeHead(302, { location: links[shortCode] });
//         return res.end();
//       }

//       res.writeHead(404, { "Content-Type": "text/plain"});
//       return res.end("Shortened URL is not found");
//     }
//   }

//   if (req.method === "POST" && req.url === "/shorten") {
//     const links = await loadLinks();

//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", async () => {
//       try {
//         const { url, shortCode } = JSON.parse(body);

//         if (!url) {
//           res.writeHead(400, { "Content-Type": "text/plain" });
//           return res.end("URL is required");
//         }

//         const finalShortCode =
//           shortCode || crypto.randomBytes(4).toString("hex");

//         if (links[finalShortCode]) {
//           res.writeHead(400, { "Content-Type": "text/plain" });
//           return res.end("Short code already exists. Please choose another.");
//         }

//         links[finalShortCode] = url;
//         await saveLinks(links);

//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));
//       } catch (error) {
//         res.writeHead(400, { "Content-Type": "text/plain" });
//         res.end("Invalid JSON format in request body");
//       }
//     });
//   }
// });

// server.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });

// // import { createServer } from "http";
// // import { readFile } from "fs/promises";
// // import crypto from "crypto";
// // import path from "path";

// // const PORT = 3300;
// // const DATA_FILE = path.join("data", "links.json");

// // const serveFile = async (res, filePath, contentType) => {
// //   try {
// //     const data = await readFile(filePath);
// //     res.writeHead(200, { "Content-Type": contentType });
// //     res.end(data);
// //   } catch (error) {
// //     res.writeHead(404, { "Content-Type": "text/plain" });
// //     res.end("404 Page Not Found");
// //   }
// // };

// // const loadLinks = async () => {
// //   try {
// //     const data = await readFile(DATA_FILE, "utf-8");
// //     return JSON.parse(data);
// //   } catch (error) {
// //     if (error.code === "ENOENT") {
// //       await writeFile(DATA_FILE, JSON.stringify({}));
// //       return {};
// //     }
// //     throw error;
// //   }
// // };

// // const saveLinks = async (links) => {
// //   await writeFile(DATA_FILE, JSON.stringify(links));
// // };

// // const server = createServer(async (req, res) => {  // async because we will use the FS Promises version to read and write the files.
// //   console.log(req.url);

// //   if (req.method === "GET") {
// //     if (req.url === "/") {
// //       //   try {
// //       //     const data = await readFile(path.join("public", "index.html"));
// //       //     res.writeHead(200, { "Content-Type": "text/html" });
// //       //     res.end(data);
// //       //   } catch (error) {
// //       //     res.writeHead(404, { "Content-Type": "text/html" });
// //       //     res.end("404 Page Not Found");
// //       //   }

// //       return serveFile(res, path.join("public", "index.html"), "text/html");
// //     } else if (req.url === "/style.css") {
// //       // try {
// //       //     const data = await readFile(path.join("public", "style.css"));
// //       //     res.writeHead(200, {"Content-Type" : "text/css"});
// //       //     res.end(data);
// //       // } catch (error) {
// //       //     res.writeHead(404, {"Content-Type" : "text/html"});
// //       //     res.end("404 Page not found");
// //       // }

// //       return serveFile(res, path.join("public", "style.css"), "text/css");
// //     }
// //   }

// //   if (req.method === "POST" && req.url === "/shorten") {
// //     const links = await loadLinks();

// //     try {
// //       let body = "";

// //       // Listen to data event on the request object
// //       req.on("data", (chunk) => {
// //         body += chunk;
// //       });

// //       // Listen to end event on the request object
// //       req.on("end", async () => {
// //         try {
// //           const { url, shortCode } = JSON.parse(body);

// //           if (!url) {
// //             res.writeHead(400, { "Content-Type": "text/plain" });
// //             return res.end("URL is required");
// //           }

// //           const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

// //           if (links[finalShortCode]) {
// //             res.writeHead(400, { "Content-Type": "text/plain" });
// //             return res.end("Short code already exists. Please choose another.");
// //           }

// //           links[finalShortCode] = url;

// //           await saveLinks(links);

// //           res.writeHead(200, { "Content-Type": "application/json" });
// //           res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));
// //         } catch (error) {
// //           res.writeHead(400, { "Content-Type": "text/plain" });
// //           res.end("Invalid JSON format in request body");
// //         }
// //       });
// //     } catch (error) {
// //       console.error(error.message);
// //       res.writeHead(500, { "Content-Type": "text/plain" });
// //       res.end("Internal Server Error");
// //     }
// //   }

// // });

// // server.listen(PORT, () => {
// //   console.log(`Server is running at http://localhost:${PORT}`);
// // });

// // import { createServer } from "http";
// // import { readFile } from "fs/promises";
// // import path from "path";

// // const PORT = 3300;

// // const server = createServer(async (req, res) => {
// //     // console.log(req.url);
// //   if (req.method === "GET") {
// //     if (req.url === "/") {
// //       try {
// //         const data = await readFile(path.join("public", "index.html"));
// //         res.writeHead(200, { "Content-Type": "text/html" });
// //         res.end(data);
// //       } catch (error) {
// //         res.writeHead(404, { "Content-Type": "text/html" });
// //         res.end("404 Page Not Found");
// //       }
// //     } else if (req.method === 'GET') {
// //         if(req.url === "/style.css"){
// //             try {
// //                 const data = await readFile(path.join("public", "style.css"));
// //                 res.writeHead(200, {"Content-Type" : "text/css"});
// //                 res.end(data);
// //             } catch (error) {
// //                 res.writeHead(404, {"Content-Type" : "text/html"});
// //                 res.end("404 Page not found");
// //             }
// //         }
// //     }
// //   }
// // });

// // server.listen(PORT, () => {
// //   console.log(`Server is running at http://localhost:${PORT}`);
// // });
