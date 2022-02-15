import React from "react";
import "./blogCard.css";

class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  };
  render() {
    return (
      <div className="pageContainer">
        <div
          onMouseEnter={this.flip}
          onMouseLeave={this.flip}
          className={"cardContainer" + (this.state.flipped ? " flipped" : "")}
        >
          <Front front = {this.props.front} />
          <Back back = {this.props.back}/>
        </div>
      </div>
    );
  }
}

class Front extends React.Component {
  render() {
    return (
      <div className="front">
        <i className={this.props.front}></i>
      </div>
    );
  }
}

class Back extends React.Component {
  render() {
    return (
      <div className="back">
        <p> {this.props.back} </p>
      </div>
    );
  }
}

export default BlogCard;
