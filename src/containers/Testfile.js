import PropTypes from "prop-types";
import React, { useState } from "react";
import '../index.css';
import {useParams} from 'react-router-dom'
import { Radio } from "./Radio";

function Testfile(){
      
    const [selected, setSelected] = useState("first");
    const ontapped = () => {
      console.log('select',selected)
    }

    return (
        <>
        <Radio
          value="first"
          selected={selected}
          text="First Radio Button"
          onChange={setSelected}
        />
        <Radio
          value="second"
          selected={selected}
          text="Second Radio Button"
          onChange={setSelected}
        />

        <button className="btn" onClick={ontapped}>click</button>
      </>

      
        );
  }
export default Testfile;