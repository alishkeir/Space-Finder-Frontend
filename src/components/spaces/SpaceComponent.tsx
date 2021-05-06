import { Component } from "react";
import flightImage from "../../assets/images/space-image.jpeg";
import "./space.css";

interface SpaceProps {
  spaceID: string;
  name: string;
  location: string;
  image?: string;
  reserveSpace: (spaceID: string) => void;
}

export class SpaceComponent extends Component<SpaceProps> {
  private renderImage() {
    if (this.props.image) {
      return <img src={this.props.image} alt="" />;
    } else {
      return <img src={flightImage} alt="flight" />;
    }
  }

  render() {
    return (
      <div  className='spaceComponent'>
        {this.renderImage()} <br />
        <label className="name">{this.props.name}</label> <br />
        <label className="spaceId">{this.props.spaceID}</label> <br />
        <label className="location">{this.props.location}</label> <br />
        <button onClick={() => this.props.reserveSpace(this.props.spaceID)}>
          Reserve
        </button>
      </div>
    );
  }
}
