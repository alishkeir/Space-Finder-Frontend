import { Component } from "react";
// import "./App.css";
import { User } from "../models/model";
import { AuthService } from "../services/AuthService";
import { Login } from "./Login";

// eslint-disable-next-line
interface AppState {
  user: User | undefined;
}



export class App extends Component {
  private authService: AuthService = new AuthService();

  render() {
    return (
      <div>
        <Login authService={this.authService} />
      </div>
    );
  }
}
