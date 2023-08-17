import React from "react";
import "./MaskButton.css";

export default function MaskButton(props) {
  function goTo() {
    window.open("https://whitepaper.renderverse.io/welcome/abstract", "_blank");
  }

  return (
    <div className="button-container-1">
      <span className="mas">{props.label}</span>
      <button
        id="work"
        type="button"
        name="Hover"
        onClick={() => goTo(props.to)}
      >
        {" "}
        {props.label}{" "}
      </button>
    </div>
  );
}
