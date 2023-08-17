import Eco from "../../assets/eco.mp4";

const Features = () => {
  return (
    <div>
      {/* Start */}
      <section
        className="section"
        style={{
          background: "#0b1118",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">
                  <span
                    style={{
                      background: "#6666FF",
                      color: "white",
                      padding: "0 1rem",
                      margin: "0 .5rem",
                    }}
                  >
                    Eco
                  </span>
                  System
                </h4>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row">
            <div
              style={{
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
              }}
              className="col-12 mt-4 pt-2"
            >
              <video
                style={{
                  display: "flex",
                  alignSelf: "center",
                }}
                className="eco_system"
                alt="eco_system"
                muted
                playsInline
                autoPlay
                loop
              >
                <source src={Eco}></source>
              </video>
            </div>

            <div className="col-12 mt-4 pt-2">
              <div className="row">
                <div
                  data-aos="fade-down"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  className="col-lg-6 col-md-6 col-12 mt-4 pt-2"
                >
                  <div className="feature feature-primary feature-clean bg-light rounded p-4 mx-2">
                    <div className="icons text-center">
                      <i className="uil uil-mobile-android d-block rounded h3 mb-0" />
                    </div>
                    <div className="content mt-4">
                      <a href="features.html" className="text-dark h5 title">
                        RENDERSCAN
                      </a>
                      <p className="text-muted mt-3 mb-0">
                        A Deep learning based mobile application that enables users to mint NFT's by scanning objects around them
                      </p>
                      <div className="mt-2">
                        <a href="features.html" className="link">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end col*/}
                <div
                  data-aos="fade-down"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  className="col-lg-6 col-md-6 col-12 mt-4 pt-2"
                >
                  <div className="feature feature-primary feature-clean bg-light rounded p-4 mx-2">
                    <div className="icons text-center">
                      <i className="uil uil-play d-block rounded h3 mb-0" />
                    </div>
                    <div className="content mt-4">
                      <a href="features.html" className="text-dark h5 title">
                        RENDERPLAY
                      </a>
                      <p className="text-muted mt-3 mb-0">
                        Participate in contests and win exciting rewards on our online P2E gaming platform
                      </p>
                      <div className="mt-2">
                        <a href="features.html" className="link">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end col*/}
                <div
                  data-aos="fade-down"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  className="col-lg-6 col-md-6 col-12 mt-4 pt-2"
                >
                  <div className="feature feature-primary feature-clean bg-light rounded p-4 mx-2">
                    <div className="icons text-center">
                      <i className="uil uil-store d-block rounded h3 mb-0" />
                    </div>
                    <div className="content mt-4">
                      <a href="features.html" className="text-dark h5 title">
                        RENDERSTORE
                      </a>
                      <p className="text-muted mt-3 mb-0">
                        Shop your favourite merchandise on our metaverse store with $RNDV token
                      </p>
                      <div className="mt-2">
                        <a href="features.html" className="link">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end col*/}
                <div
                  data-aos="fade-down"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  className="col-lg-6 col-md-6 col-12 mt-4 pt-2"
                >
                  <div className="feature feature-primary feature-clean bg-light rounded p-4 mx-2">
                    <div className="icons text-center">
                      <i className="uil uil-coins d-block rounded h3 mb-0" />
                    </div>
                    <div className="content mt-4">
                      <a href="features.html" className="text-dark h5 title">
                        RENDERFI
                      </a>
                      <p className="text-muted mt-3 mb-0">
                        Earn passive yield on your $RNDV tokens on our DEFI
                        Platform with attractive APY
                      </p>
                      <div className="mt-2">
                        <a href="features.html" className="link">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end col*/}
              </div>
            </div>
          </div>
        </div>
        {/*end row*/}
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* Vision End */}
    </div>
  );
};

export default Features;
