import Action1 from "../../../assets/images/action/action_2.webp";
import "./Action.css";
import { useState, useEffect } from "react";

// import Lottie from "lottie-react-web";
// import Animation from "../../../assets/lottie/coming-soon.json";

import Wave from "react-wavify";

const Modal = ({ onRequestClose }) => {
  // Use useEffect to add an event listener to the document
  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose();
      }
    }

    // Prevent scolling
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <div className="modal__backdrop">
      <div className="modal__container">
        <div data-aos="fade-down">
          {/* <Lottie options={{ animationData: Animation, loop: true }} /> */}
        </div>
        <button type="button" className="sbutton" onClick={onRequestClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const Action = () => {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  const cols = [
    {
      url: Action1,
      class: "",
    },
  ];

  return (
    <div>
      <div
        style={{
          background: "#fdfaf6",
          position: "relative",
        }}
      >
        <Wave
          fill="#fdfaf6"
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 3,
          }}
          style={{
            position: "absolute",
            top: "-4rem",
            width: "100%",
            height: "10vh",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            rowGap: "1rem",
            padding: "2rem 0",
          }}
        >
          <div className="">
            <div
              style={{
                fontSize: "2rem",
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
                color: "#0B1118",
              }}
            >
              <span
                style={{
                  background: "#7A0BC0",
                  color: "white",
                  padding: "0 1rem",
                  margin: "0 .5rem",
                }}
              >
                Explore
              </span>
              Renderverse
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#7A0BC0",
                margin: "1rem 0 0 0",
              }}
            >
              Try it yourself. Invite code: renderverse
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem",
              }}
            ></div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                columnGap: "1rem",
              }}
            >
              <div onClick={toggle} className="btn btn-primary btn-lg">
                <i className="uil uil-apple"></i>
                <span> App Store</span>
              </div>
              <div onClick={toggle} className="btn btn-primary btn-lg">
                <i className="uil uil-google-play"></i>
                <span> Play Store</span>
              </div>
            </div>
            {open ? <Modal onRequestClose={toggle}></Modal> : null}
            <div style={{ margin: "5rem 0rem" }}>
              {cols.map((col, index) => {
                return (
                  <div
                    className={col.class}
                    style={{
                      display: "flex",
                      alignSelf: "center",
                      justifySelf: "center",
                    }}
                    key={index}
                  >
                    <img
                      height="auto"
                      width="auto"
                      className="action_img"
                      style={{
                        display: "flex",
                        alignSelf: "ceneter",
                      }}
                      alt="image4"
                      src={col.url}
                    ></img>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;

// import TinySlider from "tiny-slider-react";

// const imgs = [1, 2, 3, 4, 5, 6];

// const settings = {
//   controls: false,
//   mouseDrag: true,
//   loop: true,
//   rewind: true,
//   autoplay: true,
//   autoplayButtonOutput: false,
//   autoplayTimeout: 3000,
//   nav: false,
//   speed: 400,
//   gutter: 12,
//   responsive: {
//     992: {
//       items: 4,
//     },

//     767: {
//       items: 2,
//     },

//     320: {
//       items: 1,
//     },
//   },
// };

// <div className="mobile_view">
//             <div className="action_row_1">
//               <TinySlider settings={settings}>
//                 {imgs.map((i) => (
//                   <img
//                     key={i}
//                     style={{ borderRadius: "3vh", marginTop: "2rem" }}
//                     height={520}
//                     width={120}
//                     alt="image0"
//                     src={Action1}
//                   ></img>
//                 ))}
//               </TinySlider>
//             </div>
//           </div>
