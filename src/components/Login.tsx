import { Component } from "react";
import { AuthService } from "../services/AuthService";

interface LoginProps {
  authService: AuthService;
}
interface LoginState {
  userName: string;
  password: string;
  loginAttempt: boolean;
  loginSuccess: boolean;
}

export class Login extends Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: "",
    password: "",
    loginSuccess: false,
    loginAttempt: false,
  };

  render() {
    return (
      <div>
        <h2>Please Login!</h2>
        <form>
          <input value={this.state.userName} /> <br />
          <input value={this.state.password} type="password" /> <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
