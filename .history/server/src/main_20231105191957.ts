import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const port = 4000;

const prod = process.env.ENV === "production";

if (prod) {
  const client = path.join(__dirname, "../client/build");
  app.use(client);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
