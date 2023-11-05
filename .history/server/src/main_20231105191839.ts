import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 4000;

if (process.env.ENV === "production") {
  app.use(express.static(__dirname + "/client"));
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
