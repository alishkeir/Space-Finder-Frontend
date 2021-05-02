import { Component, SyntheticEvent } from "react";
import { User } from "../models/model";
import { AuthService } from "../services/AuthService";

interface LoginProps {
  authService: AuthService;
  setUser: (user: User) => void;
}
interface LoginState {
  userName: string;
  password: string;
  loginAttempt: boolean;
  loginSuccess: boolean;
}

interface CustomEvent {
  target: HTMLInputElement;
}

export class Login extends Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: "",
    password: "",
    loginSuccess: false,
    loginAttempt: false,
  };

  private setUserName(event: CustomEvent) {
    this.setState({ userName: event.target.value });
    // console.log(event.target.value);
  }

  private setPassword(event: CustomEvent) {
    this.setState({ password: event.target.value });
    // console.log(event.target.value);
  }

  private async handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    this.setState({ loginAttempt: true });
    const result = await this.props.authService.login(
      this.state.userName,
      this.state.password
    );

    if (result) {
      // console.log(result);
      this.setState({ loginSuccess: true });
      this.props.setUser(result);
    } else {
      this.setState({ loginSuccess: false });
    }
  }

  render() {
    let loginMessage: any;
    if (this.state.loginAttempt) {
      if (this.state.loginSuccess) {
        loginMessage = <h4>Successfuly logged in</h4>;
      } else {
        loginMessage = <h4>Invalid Username or Password</h4>;
      }
    }

    return (
      <div>
        <h2>Please Login!</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            value={this.state.userName}
            onChange={(e) => this.setUserName(e)}
          />{" "}
          <br />
          <input
            value={this.state.password}
            type="password"
            onChange={(e) => this.setPassword(e)}
          />{" "}
          <br />
          <input type="submit" value="Login" />
        </form>
        {loginMessage}
      </div>
    );
  }
}
