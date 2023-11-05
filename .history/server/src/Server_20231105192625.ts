import express from "express";
import dotenv from "dotenv";
import path from "path";

export class Server {
  private static instance: Server;

  private app: any;
  private port = 4000;

  private prod: boolean = false;

  constructor() {
    dotenv.config();
    this.prod = process.env.ENV === "production";
    this.initExpress();
  }

  private initExpress() {}

  public static init() {
    if (!this.instance) {
      return new Server();
    }

    return this.instance;
  }
}
