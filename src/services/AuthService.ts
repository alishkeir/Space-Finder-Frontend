import { readSync } from "node:fs";
import { User } from "../models/model";

export class AuthService {
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    if (userName === "user" && password === "1234") {
      return {
        userName: userName,
        email: "alishkeir_@hotmail.com",
      };
    } else {
      return undefined;
    }
  }
}
