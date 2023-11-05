import express from "express";
import dotenv from "dotenv";
import path from "path";

export class Server {
  private static instance: Server;

  private app: express.Application;
  private port = 4000;

  private prod: boolean = false;

  private clientDir: string;

  constructor() {
    dotenv.config();
    this.detectEnv();
    this.clientDir = path.join(__dirname, "../../client/build");
    this.initExpress();
  }

  private detectEnv() {
    this.prod = process.env.ENV === "production";
    console.log(`[System] Running in ${process.env.ENV} mode`);
  }

  private initExpress() {
    this.app = express();

    if (this.prod) {
      this.app.use(express.static(this.clientDir));
    }

    this.app.get("/", (req, res) => {
      if (this.prod) {
        res.sendFile(path.join(this.clientDir, "index.html"));
        return;
      }
      res.send("Hello World!");
    });

    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`);
    });

    return this.app;
  }

  public static init() {
    if (!this.instance) {
      return new Server();
    }

    return this.instance;
  }
}
