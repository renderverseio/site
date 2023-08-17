import Image1 from "../../../assets/images/backers/cointelegraph_press.webp";
import Image2 from "../../../assets/images/backers/investing_press.webp";
import Image3 from "../../../assets/images/backers/yahoo_press.webp";
import Image4 from "../../../assets/images/backers/coindesk_press.webp";

import Image8 from "../../../assets/images/backers/cryptobriefing_press.webp";
import Image9 from "../../../assets/images/backers/blockonomi_press.webp";

import P1 from "../../../assets/images/backers/p1.png";
import P2 from "../../../assets/images/backers/p2.png";

import Wave from "react-wavify";

import "./FeaturedIn.css";

const data = [
  {
    img: P1,
    name: "Venkatesh Sarvaiddhi",
    role_1: "MD at Springer Nature India",
    role_2: "Ex - Deloitte, Microsoft | IIM Calcutta",
  },
  {
    img: P2,
    name: "Prem Dharmani",
    role_1: "Founder OpinionVerse",
    role_2: "Ex - MPL Goibibo & MMT | IIT Madras",
  },
];

const Product = (props) => {
  return (
    <div
      style={{
        background: "#0b1118",
        position: "relative",
      }}
    >
      <div style={{ position: "relative", height: "12vh" }}>
        <Wave
          style={{ position: "absolute", top: "-5rem", zIndex: 100 }}
          paused={true}
          fill="#0b1118"
          options={{
            height: 25,
            amplitude: 25,
            speed: 0.35,
            points: 3,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2rem",
          margin: "0 0 5rem 0",
        }}
      >
        {props.title}
      </div>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column", rowGap: "4rem" }}
      >
        {props.hasBackers ? (
          <div className="row">
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-easing="ease-in-sine"
              className="feature_row_1"
            >
              <img
                height={30}
                width={160}
                style={{ display: "flex", alignSelf: "center" }}
                src={Image1}
                alt="image1"
              />
              <img
                height={30}
                width={160}
                style={{ display: "flex", alignSelf: "center" }}
                src={Image2}
                alt="image1"
              />
              <img height={35} width={100} src={Image3} alt="image1" />
              <img
                height={30}
                width={160}
                style={{ display: "flex", alignSelf: "center" }}
                src={Image4}
                alt="image1"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-easing="ease-in-sine"
              className="feature_row_1"
            >
              <img height={40} width={150} src={Image8} alt="image1" />
              <img height={30} width={150} src={Image9} alt="image1" />
            </div>
          </div>
        ) : (
          <div
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "1rem 0",
                  transform: "translateX(-2%)",
                }}
              >
                <div
                  style={{
                    fontSize: "1.35rem",
                    padding: ".25rem .5rem",
                  }}
                  className="text-muted"
                >
                  OUR
                </div>
                <div
                  style={{
                    color: "#ffffff",
                    fontSize: "1.35rem",
                    fontWeight: "bold",
                    padding: ".25rem .5rem",
                    background: "#E20880",
                  }}
                >
                  ADVISORS
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  columnGap: "3rem",
                }}
              >
                {data.map((d, i) => (
                  <div key={i}>
                    <image src={d.img} alt="img" />
                    <h4>{d.name}</h4>
                    <h6>{d.role_1}</h6>
                    <h6>{d.role_2}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {props.isFeatured ? (
        <Wave
          paused={false}
          fill="#FFFFFF"
          options={{
            height: 25,
            amplitude: 25,
            speed: 0.35,
            points: 3,
          }}
        />
      ) : null}
    </div>
  );
};

export default Product;
