/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Link } from "react-scroll";

import Background from "../../../assets/final.mp4";
import Telegram from "../../../assets/images/renderverse/telegram.svg";
import Twitter from "../../../assets/images/renderverse/twitter.svg";
import Medium from "../../../assets/images/renderverse/medium.svg";
import Instagram from "../../../assets/images/renderverse/instagram (3).svg";
import ScrollDown from "../../../assets/images/icons/arrow.svg";
import SlideButton from "../../../components/Button/SlideButton";
import MaskButton from "../../../components/Button/MaskButton";

import "./Renderverse.css";

const Renderverse = () => {
  const video = React.createRef();

  React.useEffect(() => {
    video.current.playbackRate = 1.25;
    video.current.play();
  }, [video]);

  return (
    <div className="renderverse_container">
      <video
        style={{
          width: "100%",
          height: "108vh",
          objectFit: "cover",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: -1,
        }}
        ref={video}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={Background} type="video/mp4" />
      </video>

      <div className="renderverse">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              rowGap: "1rem",
            }}
          >
            <div className="title-heading">
              <span className="linker badge bg-soft-success rounded-md">
                $RNDR
              </span>
              <div className="glow-text">A Doorway into the AI & Metaverse</div>
            </div>
          </div>

          <div className="custom_button_group">
            <SlideButton label="Try Dapp" />
            <MaskButton label="White Paper" />
          </div>
        </div>

        <div className="mid_row">
          <div className="mid_bottom">
            <div
              className="renderverse_socials"
              style={{
                display: "flex",
                justifyContent: "center",
                columnGap: "3rem",
              }}
            >
              <a
                className="socials_l"
                href="https://twitter.com/teamrenderverse"
                target={"_blank"}
              >
                <img src={Twitter} alt="twitter"></img>
              </a>

              <a
                href="https://renderverse.medium.com/"
                target={"_blank"}
                className="socials_l"
              >
                <img src={Medium} alt="medium"></img>
              </a>

              <a
                href="https://t.me/renderversechat"
                target={"_blank"}
                className="socials_l"
              >
                <img src={Telegram} alt="telegram"></img>
              </a>

              <a
                href="https://instagram.com/teamrenderverse"
                target={"_blank"}
                className="socials_l"
              >
                <img src={Instagram} alt="medium"></img>
              </a>
            </div>

            <p className="sub-text-title">
              Immerse yourself into the world of Renderverse
              <Link to="/mission">
                <span
                  style={{
                    display: "block",
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, -20%)",
                  }}
                >
                  <img
                    height={40}
                    width={40}
                    src={ScrollDown}
                    alt="scroll down"
                  />
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Renderverse;
