import express from "express";
import dotenv from "dotenv";
import path from "path";

export class Server {
  private static instance: Server;

  private app: any;
  private port = 4000;

  constructor() {
    dotenv.config();
  }

  public static init() {
    if (!this.instance) {
      return new Server();
    }

    return this.instance();
  }
}
