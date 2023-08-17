/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
import Praneeth from "../../assets/images/team/avtar_praneeth.webp";
import Chakri from "../../assets/images/team/avtar_chakri.webp";
import Akash from "../../assets/images/team/avtar_akash.webp";
import Roney from "../../assets/images/team/roney.webp";
import Prasanth from "../../assets/images/team/prasanth.webp";

import LinkedIn from "../../assets/images/icons/socials/linkedin.webp";
import Mail from "../../assets/images/icons/socials/email.webp";
import Twitter from "../../assets/images/icons/socials/twitter.webp";

import Tilt from "react-parallax-tilt";

const Team = () => {
  const coreTeam = [
    {
      name: "Praneeth Nagu",
      role: "Founder / Marketing Lead",
      size: 188,
      links: [
        {
          link: "https://www.linkedin.com/in/praneethnagu/",
          icon: LinkedIn,
          size: "40",
        },
        {
          link: "mailto:praneeth@artemisnetwork.io",
          icon: Mail,
          size: "40",
        },
      ],
      img: Praneeth,
    },
    {
      name: "D. C. R",
      role: "Co-Founder / Project Lead",
      size: 170,
      links: [
        {
          link: "https://twitter.com/dcr_dev",
          icon: Twitter,
          size: "40",
        },
        {
          link: "mailto:dcr@artemisnetwork.io",
          icon: Mail,
          size: "40",
        },
      ],
      img: Chakri,
    },
    {
      name: "Akash Madduru",
      role: "Product / Dev Lead",

      size: 170,
      links: [
        {
          link: "https://www.linkedin.com/in/akashmrc98/",
          icon: LinkedIn,
          size: "40",
        },
        {
          link: "mailto:akashm@artemisnetwork.io",
          icon: Mail,
          size: "40",
        },
      ],
      img: Akash,
    },
  ];

  const team = [
    {
      name: "Roney",
      role: "Product / Design Lead",
      margin: "2rem",
      size: 170,
      links: [
        {
          link: "https://www.linkedin.com/in/roney-antony-41501891/",
          icon: LinkedIn,
          size: "40",
        },
        {
          link: "mailto:roney@artmeisnetwork.io",
          icon: Mail,
          size: "40",
        },
      ],
      img: Roney,
    },
    {
      name: "Prashanth",
      role: "Blockchain Developer",
      margin: "0rem",
      size: 170,
      links: [
        {
          link: "mailto:prashanth@artemisnetwork.io",
          icon: Mail,
          size: "40",
        },
      ],
      img: Prasanth,
    },
  ];

  return (
    <div style={{ background: "white" }}>
      <div
        style={{
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
          padding: "6rem 0 0 0 ",
          color: "#0b111a",
        }}
      >
        <span
          style={{
            padding: "0 1rem",
            background: "#111341",
            color: "white",
            margin: "0 .5rem",
          }}
        >
          Meet
        </span>{" "}
        the Team
      </div>
      <section className="section">
        <div className="container">
          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="row justify-content-center my-5"
          >
            {coreTeam.map((person, index) => {
              return (
                <div key={index} className="col-lg-3 col-md-3 col-12">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      columnGap: ".5rem",
                      margin: "1rem 0",
                    }}
                  >
                    {person.links.map((link) => {
                      return (
                        <Tilt>
                          <a href={link.link} key={link.link} target={"_blank"}>
                            <img
                              src={link.icon}
                              width={link.size}
                              style={{
                                boxShadow: "1px 1px 12px solid gray",
                              }}
                              alt="im1"
                            ></img>
                          </a>
                        </Tilt>
                      );
                    })}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Tilt>
                      <img
                        style={{
                          borderRadius: "12rem",
                          display: "flex",
                          alignSelf: "center",
                          margin: "auto",
                        }}
                        src={person.img}
                        alt=""
                        width={person.size}
                      />
                    </Tilt>
                    <div className="py-4">
                      <h6
                        className="mb-0  text-center"
                        style={{ color: "#0b1118" }}
                      >
                        {person.name}
                      </h6>
                      <h6
                        className="mb-0 text-center"
                        style={{ fontWeight: "bold", color: "#0b1118" }}
                      >
                        {person.role}
                      </h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/*end row*/}
          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="row justify-content-center my-5"
          >
            {team.map((person, index) => {
              return (
                <div key={index} className="col-lg-3 col-md-3 col-12">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      columnGap: ".5rem",
                      padding: "1rem 0",
                    }}
                  >
                    {person.links.map((link) => {
                      return (
                        <Tilt>
                          <a href={link.link} key={link.link} target={"_blank"}>
                            <img
                              src={link.icon}
                              width={link.size}
                              alt="im1"
                            ></img>
                          </a>
                        </Tilt>
                      );
                    })}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Tilt>
                      <img
                        style={{
                          borderRadius: "12rem",
                          display: "flex",
                          alignSelf: "center",
                          margin: "auto",
                          paddingBottom: person.margin,
                        }}
                        src={person.img}
                        alt=""
                        width={190}
                      />
                    </Tilt>
                    <div className="">
                      <h6
                        className="mb-0 text-center"
                        style={{ color: "#0b1118" }}
                      >
                        {person.name}
                      </h6>
                      <h6
                        className="mb-0 text-center"
                        style={{ fontWeight: "bold", color: "#0b1118" }}
                      >
                        {person.role}
                      </h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/*end container*/}
      </section>

      {/* End */}
    </div>
  );
};
export default Team;
