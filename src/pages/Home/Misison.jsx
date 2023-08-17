import MissionPNG from "../../assets/images/mission/virtual-reality-experience-min.webp";
import Product from "../../assets/images/mission/hand-min.webp";

const Mission = () => {
  return (
    <div>
      <section
        className="section"
        style={{
          background: "#ffffff",
          padding: "4rem 0 4rem 0",
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        ></div>

        <div className="container">
          <div className="row align-items-center">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-once={true}
              data-aos-easing="ease-in-sine"
              className="col-lg-6 col-md-6 order-2 order-md-1"
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
                  MISSION
                </div>
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  color: "#0b1118",
                }}
              >
                Empowering every person on the planet to step into the world of
                Metaverse and NFT's with next-gen rendering technology powered
                by AI. We strive to deliver the highest quality and value
                possible through simple, easy, and relevant solutions with a
                determination to succeed
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-once={true}
              data-aos-easing="ease-in-sine"
              className="col-lg-6 col-md-6 order-2 order-md-1"
            >
              <img
                height="auto"
                width="auto"
                src={MissionPNG}
                style={{ height: "100%", width: "100%" }}
                alt=""
              />
            </div>
            {/*end col*/}
          </div>

          <div className="mission_desk_row row align-items-center">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-once={true}
              data-aos-easing="ease-in-sine"
              className="col-lg-6 col-md-6 order-2 order-md-1"
            >
              <img
                height="auto"
                width="auto"
                src={Product}
                style={{
                  height: "750%",
                  width: "75%",
                  transform: "translateY(-3rem)",
                }}
                alt=""
              />
            </div>

            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-once={true}
              data-aos-easing="ease-in-sine"
              className="mission_desk_row col-lg-6 col-md-6 order-2 order-md-1 "
            >
              <div className="my-4 mx-4">
                <div
                  style={{
                    display: "flex",
                    padding: "1rem 0",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.35rem",
                      padding: ".25rem .5rem",
                      textAlign: "left",
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
                      background: "#674C9F",
                    }}
                  >
                    PRODUCT
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "1.25rem",
                    color: "#0b1118",
                  }}
                >
                  With our unique AI-powered application and $RNDV at the heart
                  of its economy, Project Renderverse is conquering the
                  metaverse by storm. Our state-of-the-art models enable users
                  to transform real-world items into high-quality NFTs. Users
                  can mint NFTs, purchase merchandise, and play P2E games on
                  Renderverse ecosystem.
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>

          <div className="mission_mobile_row row align-items-center">
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-once={true}
              data-aos-easing="ease-in-sine"
              className="col-lg-6 col-md-6 order-2 order-md-1 "
            >
              <div className="my-4 mx-4">
                <div
                  style={{
                    display: "flex",
                    padding: "1rem 0",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.35rem",
                      padding: ".25rem .5rem",
                      textAlign: "left",
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
                      background: "#674C9F",
                    }}
                  >
                    PRODUCT
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "1.25rem",
                    color: "#0b1118",
                  }}
                >
                  With our unique AI-powered application and $RNDV at the heart
                  of its economy, Project Renderverse is conquering the
                  metaverse by storm. Our state-of-the-art models enable users
                  to transform real-world items into high-quality NFTs. Users
                  can exchange NFTs, purchase merchandise, and play P2E games on
                  Renderverse ecosystem.
                </div>
              </div>
              {/*end col*/}
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-once={true}
                data-aos-easing="ease-in-sine"
                className="col-lg-6 col-md-6 order-2 order-md-1"
              >
                <img
                  height="auto"
                  width="auto"
                  src={Product}
                  style={{
                    height: "750%",
                    width: "75%",
                    transform: "translateY(-3rem)",
                  }}
                  alt=""
                />
              </div>
            </div>
            {/*end row*/}
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}
    </div>
  );
};

export default Mission;
