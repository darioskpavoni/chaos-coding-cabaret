import express from "express";
import dotenv from "dotenv";
import path from "path";

export class Server {
  private static app: any;
  private static port = 4000;

  constructor() {
    dotenv.config();
  }
}
