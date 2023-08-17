/* eslint-disable no-useless-escape */
/* eslint-disable react/jsx-no-target-blank */
import "./Footer.css";
import Blog from "../../assets/images/footer/clipboard-min.webp";
import Announcement from "../../assets/images/footer/announcement-min.webp";
import Support from "../../assets/images/footer/feedback-message-min.webp";

import Medium from "../../assets/images/icons/footer/medium.svg";
import Instagram from "../../assets/images/icons/footer/instagram.svg";
import Telegram from "../../assets/images/icons/footer/telegram.svg";
import Twitter from "../../assets/images/icons/footer/twitter.svg";
import Terms from "../../pages/Home/TermsAndConditions";
// import Lottie from 'lottie-react-web'
// import Animation from '../../assets/lottie/successfully-done.json'
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

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
        {/* <Lottie options={{ animationData: Animation, loop: false }} /> */}
        <h2 style={{ color: "black", textAlign: "center" }}>Thanks!</h2>
        <h4 style={{ color: "black", textAlign: "center" }}>
          You're all signed up.
        </h4>
        <button type="button" className="sbutton" onClick={onRequestClose}>
          Close
        </button>
        <div className="placeholder" />
        <div className="placeholder" />
        <div className="placeholder medium" />
        <div className="placeholder" />
      </div>
    </div>
  );
};

const Footer = (props) => {
  const [email, setEmail] = useState({ value: "" });
  const [message, setMessage] = useState({ message: "" });

  function onEmailChange(e) {
    console.log(e.target.value);
    setEmail({ value: e.target.value });
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/.test(email.value)) {
      setMessage({ message: "" });
    } else {
      setMessage({ message: "Invalid Email Format" });
    }
  }

  function postData(e) {
    setMessage({ message: "" });
    if (
      email.value === null ||
      email.value === undefined ||
      email.value === ""
    ) {
      setMessage({ message: "*Required" });
    } else {
      const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        email.value
      );
      if (isValidEmail) {
        setMessage({ message: "" });
        setEmail({ value: "" });
        toggleModal(e);
        const url = "https://formspree.io/f/mzboewek";
        const data = { email: email.value, message: "hello" };
        fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "no-cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } else {
        setMessage({ message: "Invalid Email Format" });
      }
    }
  }

  const [isModalOpen, setModalIsOpen] = useState(false);

  function toggleModal(e) {
    setModalIsOpen(!isModalOpen);
  }

  const [isModalOpen2, setModalIsOpen2] = useState(false);

  function toggleModal2(e) {
    setModalIsOpen2(!isModalOpen2);
  }

  return (
    <div style={{ background: "white" }}>
      <div
        style={{ display: "flex", height: "16vh", background: "#0b1118" }}
      ></div>
      <footer style={{ backgroundColor: "white" }}>
        <div className="container">
          {isModalOpen && <Modal onRequestClose={toggleModal} />}
          {isModalOpen2 && <Modal2 onRequestClose={toggleModal2} />}

          <div className="mobile-view ">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                rowGap: "1rem",
                maring: "4rem 2rem",
                padding: "5rem 0",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ color: "#0B1118", fontSize: "3rem" }}>Join</div>
                <p style={{ color: "#0B1118" }}>The Community</p>
              </div>
              <input
                required
                onChange={(e) => onEmailChange(e)}
                className="form-control"
                style={{
                  padding: "1rem",
                  fontSize: "1rem",
                  background: "white",
                  borderRadius: "4vh",
                }}
                type="email"
                placeholder="Enter your email"
              />
              <div style={{ fontSize: ".9rem", padding: ".5rem 1rem" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ color: "#EF6D6D" }}>{message.message}</div>
                  <div style={{ color: "#0b1118" }}>
                    By entering your email, you agree to get our emails.
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={(e) => postData(e)}
                  style={{ borderRadius: "5vh" }}
                  className="btn btn-secondary "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="desk-view">
            <div
              className="row justify-content-center "
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                background: "white",
                padding: "4rem",
                borderRadius: "4vh",
                height: "100%",
                width: "80vw",
                transform: "translateY(-30%)",
                margin: "0 0 5rem 0",
              }}
            >
              <div
                className="col-lg-3 col-md-3 col-12"
                style={{
                  display: "flex",
                  transform: "translateY(-.5rem)",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "#0B1118", fontSize: "3rem" }}>Join</div>
                <p style={{ color: "#0B1118" }}>The Community</p>
              </div>
              <div className="col-lg-9 col-md-9 col-md-12">
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto auto",
                    height: "12vh",
                  }}
                >
                  <div className="col-lg-12 col-md-12 col-12">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                        columnGap: "1rem",
                      }}
                    >
                      <input
                        required
                        type="email"
                        onChange={(e) => onEmailChange(e)}
                        className="form-control"
                        style={{
                          padding: "1rem",
                          fontSize: "1rem",
                          background: "white",
                          borderRadius: "4vh",
                        }}
                        placeholder="Enter your email"
                      />
                      <button
                        onClick={(e) => postData(e)}
                        style={{ borderRadius: "4vh" }}
                        className="btn btn-secondary "
                      >
                        Submit
                      </button>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: ".25rem .5rem",
                      }}
                    >
                      <div style={{ color: "#EF6D6D" }}>{message.message}</div>
                      <div style={{ color: "#0b1118" }}>
                        By entering your email, you agree to get our emails.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row justify-content-center">
            <div
              data-aos={props.animation}
              data-aos-duration={props.duration}
              data-aos-easing={props.ease}
              className="col-lg-3 col-md-4 col-12 my-4"
            >
              <div
                className="p-2"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={Support} height={100} width={100} alt="cool" />
              </div>
              <div
                className="p-2"
                style={{
                  textAlign: "center",
                  fontSize: "1.25rem",
                  color: "#0b1118",
                }}
              >
                Support and Feedback
              </div>
              <div
                className="p-2"
                style={{ color: "#0b1118", textAlign: "center" }}
              >
                Ask questions and give feedback, We are adaptable and always
                strive to improve our services with your assistance.
              </div>
              <div className="container">
                <div className="row justify-content-center p-2">
                  <div
                    className="col-6"
                    style={{ justifyContent: "center", display: "flex" }}
                  >
                    <span>
                      <a
                        className="btn btn-outline-primary"
                        href="https://t.me/renderversechat"
                        target={"_blank"}
                      >
                        <img src={Telegram} height={30} alt="medium" />
                      </a>
                    </span>
                  </div>
                  <div
                    className="col-6"
                    style={{ justifyContent: "center", display: "flex" }}
                  >
                    <span>
                      <a
                        className="btn btn-outline-primary"
                        href="https://instagram.com/teamrenderverse"
                        target={"_blank"}
                      >
                        <img src={Instagram} height={30} alt="instagram" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos={props.animation}
              data-aos-duration={props.duration}
              data-aos-easing={props.ease}
              className="col-lg-3 col-md-4 col-12 my-4"
            >
              <div
                className="p-2"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ padding: "1rem" }}
                  src={Blog}
                  height={100}
                  width={100}
                  alt="cool"
                />
              </div>
              <div
                className="p-2"
                style={{
                  textAlign: "center",
                  fontSize: "1.25rem",
                  color: "#0b1118",
                }}
              >
                Blog
              </div>
              <div
                className="p-2"
                style={{ color: "#0b1118", textAlign: "center" }}
              >
                {" "}
                In our Medium blog, you can learn about new features,
                partnerships, and monthly updates.
              </div>
              <div className="container">
                <div className="row justify-content-center p-2 mb-2">
                  <a
                    className="btn btn-outline-primary"
                    href="https://renderverse.medium.com/"
                    target={"_blank"}
                  >
                    <img src={Medium} height={30} alt="medium" />
                    <span className="mx-2">Medium</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              data-aos={props.animation}
              data-aos-duration={props.duration}
              data-aos-easing={props.ease}
              className="col-lg-3 col-md-4 col-12 my-4"
            >
              <div
                className="p-2"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={Announcement} height={100} width={100} alt="cool" />
              </div>
              <div
                className="p-2"
                style={{
                  textAlign: "center",
                  fontSize: "1.25rem",
                  color: "#0b1118",
                }}
              >
                Annoucements
              </div>
              <div
                className="p-2"
                style={{ color: "#0b1118", textAlign: "center" }}
              >
                Stay connected with our marketing team and be the first to know
                about upcoming events, progress and updates.
              </div>
              <div className="container">
                <div className="row justify-content-center p-2">
                  <div
                    className="col-6"
                    style={{ justifyContent: "center", display: "flex" }}
                  >
                    <a
                      className="btn btn-outline-primary"
                      target={"_blank"}
                      href="https://t.me/renderverse"
                    >
                      <img src={Telegram} height={30} alt="medium" />
                    </a>
                  </div>
                  <div
                    className="col-6"
                    style={{ justifyContent: "center", display: "flex" }}
                  >
                    <a
                      className="btn btn-outline-primary"
                      target={"_blank"}
                      href="https://twitter.com/teamrenderverse"
                    >
                      <img src={Twitter} height={30} alt="medium" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer_end_l item_point">
          <Link
            to="/"
            style={{
              fontSize: "1.75rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Renderverse
          </Link>
          <div className="footer_content_links item_point">
            <div onClick={(e) => toggleModal2(e)}>Terms and condition</div>
            <div>© Renderverse 2022</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

const Modal2 = ({ onRequestClose }) => {
  // Use useEffect to add an event listener to the document
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
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
      <div
        style={{
          background: "#0b1118",
          color: "white",
          zIndex: 10000,
          padding: "2rem",
          margin: "4rem auto",
          width: "80%",
          borderRadius: "2vh",
        }}
      >
        <Terms />
        <button type="button" className="sbutton" onClick={onRequestClose}>
          Close
        </button>
      </div>
    </div>
  );
};
