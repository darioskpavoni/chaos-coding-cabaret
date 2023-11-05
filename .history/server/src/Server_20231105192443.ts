import express from "express";
import dotenv from "dotenv";
import path from "path";

export class Server {
  private static instance: Server = undefined;

  private app: any;
  private port = 4000;

  constructor() {
    dotenv.config();
  }
}
