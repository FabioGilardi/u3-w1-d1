import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <>
        <img
          src={this.props.imageUrl}
          alt={this.props.imageDescription}
          id="img"
        ></img>
        <p id="statement">React does it better!</p>
      </>
    );
  }
}

export default ImageComponent;
