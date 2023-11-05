import express from "express";
import dotenv from "dotenv";
import path from "path";

export class Server {
  private app: any;
  private port = 4000l;

  constructor() {
    dotenv.config();
  }
}
