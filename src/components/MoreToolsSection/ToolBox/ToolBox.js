import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWaveAlt,
  faImages,
} from "@fortawesome/free-solid-svg-icons";

const ToolBox = (props) => {
  let icon = null;
  props.icon === "image" ? (icon = faImages) : (icon = faMoneyBillWaveAlt);

  return (
    <a rel="noopener noreferrer" href={props.href} target="_blank">
      <div className="ToolBox">
        <div>
          <FontAwesomeIcon className="icon" icon={icon} size="4x" />
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </a>
  );
};

export default ToolBox;
