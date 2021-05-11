import { Component } from "react";
import { SpaceInterface } from "../../models/Model";
import { DataService } from "../../services/DataService";
import { ConfirmModalComponent } from "./ConfirmModal";
import { SpaceComponent } from "./SpaceComponent";

interface SpacesState {
  spaces: SpaceInterface[];
  showModal: boolean;
  modalContent: string;
}

interface SpacesProps {
  dataService: DataService;
}

export class Spaces extends Component<SpacesProps, SpacesState> {
  constructor(props: SpacesProps) {
    super(props);
    this.state = {
      spaces: [],
      showModal: false,
      modalContent: "",
    };
    this.reserveSpace = this.reserveSpace.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidMount() {
    const spaces = await this.props.dataService.getSpaces();
    this.setState({
      spaces: spaces,
    });
  }

  private async reserveSpace(spaceID: string) {
    const reserveResult = await this.props.dataService.reserveSpace(spaceID);
    if (reserveResult) {
      this.setState({
        showModal: true,
        modalContent: `You Reserved the Space with ID ${spaceID} and Got the Reservation Number  ${reserveResult}`,
      });
    } else {
      this.setState({
        showModal: true,
        modalContent: `You Can't Reserve the Space with ID ${spaceID}`,
      });
    }
  }

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

  private closeModal() {
    this.setState({
      showModal: false,
      modalContent: "",
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to The Spaces Page!</h2>
        {this.renderSpaces()}
        <ConfirmModalComponent
          close={this.closeModal}
          content={this.state.modalContent}
          show={this.state.showModal}
          // reserveSpace={this.reserveSpace}
        />
      </div>
    );
  }
}
