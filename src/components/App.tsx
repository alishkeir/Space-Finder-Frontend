import { Component } from "react";
// import "./App.css";
import { User } from "../models/model";
import { AuthService } from "../services/AuthService";
import { Login } from "./Login";
import { Router, Switch, Route } from "react-router-dom";
import History from "../utils/History";
import NavBar from "./NavBar";
import Home from "./Home";
import Profile from "./Profile";

// eslint-disable-next-line
interface AppState {
  user: User | undefined;
}

export class App extends Component<{}, AppState> {
  private authService: AuthService = new AuthService();

  constructor(props: any) {
    super(props);
    this.state = {
      user: undefined,
    };
    this.setUser = this.setUser.bind(this);
  }

  private setUser(user: User) {
    this.setState({
      user: user,
    });
    console.log("User Set:" + user);
  }

  render() {
    return (
      <div className="wrapper">
        <Router history={History}>
          <div>
            <NavBar user={this.state.user} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login">
                <Login authService={this.authService} setUser={this.setUser} />
              </Route>
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
