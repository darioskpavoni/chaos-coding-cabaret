import express from "express";
import dotenv from "dotenv";
import path from "path";

export class Server {
  private static instance: Server;

  private app: any;
  private port = 4000;

  private prod: boolean = false;

  private clientDir: string;

  constructor() {
    dotenv.config();
    this.prod = process.env.ENV === "production";
    this.clientDir = path.join(__dirname, "../../client/build");
    this.initExpress();
  }

  private initExpress() {
    if (this.prod) {
      app.use(express.static(client));
    }
  }

  public static init() {
    if (!this.instance) {
      return new Server();
    }

    return this.instance;
  }
}
