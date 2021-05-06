import { Component } from "react";
import { SpaceInterface } from "../../models/Model";
import { DataService } from "../../services/DataService";
import {SpaceComponent} from "./SpaceComponent";

interface SpacesState {
  spaces: SpaceInterface[];
}

interface SpacesProps {
  dataService: DataService;
}

export  class Spaces extends Component<SpacesProps, SpacesState> {
  constructor(props: SpacesProps) {
    super(props);
    this.state = {
      spaces: [],
    };
    this.reserveSpace = this.reserveSpace.bind(this);
  }

  async componentDidMount() {
    const spaces = await this.props.dataService.getSpaces();
    this.setState({
      spaces: spaces,
    });
  }

  private async reserveSpace(spaceID: string) {}

  private renderSpaces() {
    const rows: any[] = [];
    for (const space of this.state.spaces) {
      rows.push(
        <SpaceComponent
          location={space.location}
          name={space.name}
          spaceID={space.spaceID}
          reserveSpace={this.reserveSpace}
        />
      );
    }
    return rows;
  }

  render() {
    return (
      <div>
        <h2>Welcome to The Spaces Page!</h2>
        {this.renderSpaces()}
      </div>
    );
  }
}
