import React, { Component } from "react";
// import "./App.css";
import { User } from "../models/model";
import { AuthService } from "../services/AuthService";

// eslint-disable-next-line
interface AppState {
  user: User | undefined;
}

export class App extends Component {
  private authService: AuthService = new AuthService();

  render() {
    return (
      <>
        <div>Testtt</div>
      </>
    );
  }
}
