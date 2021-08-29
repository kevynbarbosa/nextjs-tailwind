import React, { Component } from "react";
// top: -top-10 left-1/2 transform -translate-x-1/2
// polygon-top: <polygon points="0,0 127.5,127.5 255,0" />
// svg class = top-full

// bottom: -bottom-10 left-1/2 transform -translate-x-1/2
// polygon-top: <polygon points="0,255 127.5,0 255,255" />
// svg class = bottom-full

export default class Tootilp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      direction: this.props.direction == "top" ? "top" : "bottom",
    };
  }

  handleMouseEnter = () => {
    this.setState(() => ({
      isVisible: true,
    }));
  };

  handleMouseLeave = () => {
    this.setState(() => ({
      isVisible: false,
    }));
  };

  render() {
    let polygon, svgClassName, tooltipClassName;
    if (this.props.direction == "top") {
      tooltipClassName =
        "absolute min-w-max rounded bg-black text-white text-center px-2 py-1 z-10 -top-10 left-1/2 transform -translate-x-1/2";
      svgClassName = "absolute text-black h-2 w-full left-0 top-full";
      polygon = <polygon points="0,0 127.5,127.5 255,0" />;
    } else {
      tooltipClassName =
        "absolute min-w-max rounded bg-black text-white text-center px-2 py-1 z-10 -bottom-10 left-1/2 transform -translate-x-1/2";
      svgClassName = "absolute text-black h-2 w-full left-0 bottom-full";
      polygon = <polygon points="0,255 127.5,0 255,255" />;
    }

    return (
      <div
        className="inline-block relative min-w-max "
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.children}
        {this.state.isVisible && (
          <div className={tooltipClassName}>
            <svg
              className={`${svgClassName}`}
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
            >
              {polygon}
            </svg>
            {this.props.label}
          </div>
        )}
      </div>
    );
  }
}
