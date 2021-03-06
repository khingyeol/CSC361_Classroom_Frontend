import PropTypes from "prop-types";
import React, { Component } from "react";
// import '../../index.css'
// import '../Test/style.css'

export class ButtonGroup extends Component {
    state = {};
  
    render() {
      const { selected, onChange, text, value } = this.props;
      return (
        <div
          className={`button ${value !== selected ? "bg-white" : "bg-green bg-opacity-30"}`}
          onClick={() => {
            onChange(value);
          }}
        >
          <div className="helper-text">{text}</div>
        </div>
      );
    }
  }
  
  ButtonGroup.propTypes = {
    text: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  };