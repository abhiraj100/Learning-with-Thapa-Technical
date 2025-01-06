import express from "express";

const app = express();
// app -> This variable holds the created Express app, which you can use to: 
// Define routes (app.get(), app.post(), etc.)
// Configure middleware (app.use())
// Start the server (app.listen())

app.get("/", (req, res) => {
    res.send("<h1>Hello World </h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1>Hello About Page </h1>")
})

app.get("/contact", (req, res) => {
    return res.send(`    <div class="container">
      <form id="shorten-form">
        <div>
          <label for="url">Enter URL : </label>
          <br />
          <input type="url" name="url" id="url" required />
        </div>
        <div>
          <label for="shortCode">Enter shortCode : </label>
          <br />
          <input type="text" name="shortCode" id="shortCode" required />
        </div>

        <button type="submit">Shorten</button>
      </form>
      <h2>Shortened URLs</h2>
      <ul id="shortened-urls"></ul>
    </div>`)
})

// console.log(process);

// echo $env:PORT  => to check port no.
// Remove-Item env:\PORT => to remove the port no.

// const PORT = 3000;
// 1 - way (in powershell) -->  $env.PORT=3000; npm run dev
// const PORT = process.env.PORT;   

// 2 - way (in cmd) --> set PORT=3001 && npm run dev/ node --watch app.js
const PORT = process.env.PORT || 3000;   
app.listen(PORT, () => {
    console.log(`Server is listening at PORT : ${PORT}`);
})