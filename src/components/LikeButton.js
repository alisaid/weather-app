import React from "react";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      liked: undefined
    };
  }

  handleClick(event) {
    this.props.handleLikeButtonClick(event);
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    let label = " ";
    if (this.state.liked) {
      label = <i className="fas fa-heart" />;
    } else {
      label = <i className="far fa-heart" />;
    }
    return (
      <div className="customContainer">
        <button className="like-button" onClick={this.handleClick}>
          {label}
        </button>
      </div>
    );
  }
}

export default LikeButton;
