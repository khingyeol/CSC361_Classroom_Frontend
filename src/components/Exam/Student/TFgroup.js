import PropTypes from "prop-types";
import React, { Component } from "react";
// import '../../index.css'
// import '../Test/style.css'

export class TFgroup extends Component {
    state = {};

    // getInitialState() {
    //   return {
    //     inputValue: ''
    //   };
    // }

    // updateInputValue(e) {
    //   this.setState({
    //     inputValue: e.target.value
    //   });
    // }
    
    render() {
      const { selected, onClick, text, index ,onChange} = this.props;
      return (
        <div
          className={`button ${index !== selected ? "bg-white" : "bg-green bg-opacity-30"}`}
          // onClick={() => {
          //   onChange(value);
          // }}
          onClick={() => {onClick(index)}}
        >{text}
        </div>
      );
    }
  }
  
  TFgroup.propTypes = {
    text: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired
  };