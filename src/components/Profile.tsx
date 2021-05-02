import { Component } from "react";
import { Link } from "react-router-dom";
import { User, UserAttribute } from "../models/Model";
import { AuthService } from "../services/AuthService";

interface ProfileState {
  userAttribute: UserAttribute[];
}

interface ProfileProps {
  user: User | undefined;
  authService: AuthService;
}

export default class Profile extends Component<ProfileProps, ProfileState> {
  render() {
    let profileSpace;
    if (this.props.user) {
      profileSpace = <h3>Hello {this.props.user.userName}</h3>;
    } else {
      profileSpace = <Link to="/login"> Please Login </Link>;
    }

    return (
      <div>
        <h2>Profile</h2>
        {profileSpace}
      </div>
    );
  }
}
