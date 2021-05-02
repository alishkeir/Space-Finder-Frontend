import { User, UserAttribute } from "../models/Model";

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

  public async getUserAttributes(user: User): Promise<UserAttribute[]> {
    const result: UserAttribute[] = [];

    result.push({
      Name: "Description",
      Value: "Best User Ever !",
    });

    result.push({
      Name: "Job",
      Value: "Developer",
    });

    result.push({
      Name: "Age",
      Value: "25",
    });

    result.push({
      Name: "Experience",
      Value: "3 Years",
    });

    return result;
  }
}
