import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article class="tour">
        <div className="img-container">
          <img src={img} width="200" alt="" />

          <span
            class="close-btn"
            onClick={() => {
              removeTour(id);
            }}
          >
            <i class="fas fa-window-close" />
          </span>
        </div>

        <div class="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            Info
            <span onClick={this.handleInfo}>
              {" "}
              <i class="fas fa-caret-square-down" />{" "}
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
