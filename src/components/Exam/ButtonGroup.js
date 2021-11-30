import PropTypes from "prop-types";
import React, { Component } from "react";
import '../../index.css'

export class ButtonGroup extends Component {
    state = {};
  
    render() {
      const { selected, onChange, text, value } = this.props;
      return (
        <div
          className="button"
          onClick={() => {
            onChange(value);
          }}
        >
          <div
            className={`radio-outer-circle ${value !== selected && "unselected"}`}
          >
            <div
              className={`radio-inner-circle ${value !== selected &&
                "unselected-circle"}`}
            />
          </div>
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