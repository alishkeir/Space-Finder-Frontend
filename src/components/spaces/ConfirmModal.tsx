import { Component } from "react";

interface ConfirmModalComponentProps {
  show: boolean;
  content: string;
  close: () => void;
}

export class ConfirmModalComponent extends Component<ConfirmModalComponentProps> {



  
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className="modal">
          <div className="modalContent">
            <h2>You Tried to Reserve and ...</h2>
            <h3 className="modalText">{this.props.content}</h3>
            <button onClick={() => this.props.close()}>Close</button>
          </div>
        </div>
      );
    }
  }
}
