import express from "express";
import dotenv from "dotenv";

export class Server {
  private static instance: Server;

  private app: express.Application;
  private port = 4000;

  constructor() {
    dotenv.config();
    this.initExpress();
  }

  private initExpress() {
    this.app = express();

    this.app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    this.app.listen(this.port, () => {
      console.log(`CCC backend listening on port ${this.port}`);
    });
  }

  public static init() {
    if (!this.instance) {
      return new Server();
    }

    return this.instance;
  }
}
