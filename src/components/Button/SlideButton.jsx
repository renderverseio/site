/* eslint-disable react/jsx-no-target-blank */
import "./SlideButton.css";
import React from "react";

const SlideButton = (props) => {
  const download = async () => {
    window.open("https://renderverse.io", "_blank");
    // let a = document.createElement("a");
    // a.href = "https://chipper-yeot-d29d0d.netlify.app/dapp";

    // a.href =
    //   "https://renderscan.s3.ap-south-1.amazonaws.com/renderscan_v1.0.0.apk";
    // a.download = "renderscan_v1.0.0.apk";
    // a.click();
  };

  return (
    <button onClick={download} className="btn_custom">
      <i className={props.icon} />
      <span>{props.label}</span>
    </button>
  );
};

export default SlideButton;
