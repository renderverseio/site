import React from "react";
import "../Button/MaskButton";

export default function Download(props) {
  return (
    <div className="button-container-1">
      <span className="mas">{props.label}</span>
      <button
        id="work"
        type="button"
        name="Hover"
        onClick={() => props.click()}
      >
        {" "}
        {props.label}{" "}
      </button>
    </div>
  );
}
