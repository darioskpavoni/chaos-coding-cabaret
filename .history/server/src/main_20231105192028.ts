import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const port = 4000;

const prod = process.env.ENV === "production";
const client = path.join(__dirname, "../client/build");

if (prod) {
  app.use(client);
}

app.get("/", (req, res) => {
  if (prod) {
    res.sendFile(path.join(client, "index.html"));
  }
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
