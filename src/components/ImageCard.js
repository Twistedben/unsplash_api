import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({
      spans
    });
  };

  render() {
    // Descrtuctures out this.props.image
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{ "grid-row-end": `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
