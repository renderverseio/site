/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-script-url */

import Navbar from "../../components/Navbar2/Navbar2";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import { Element } from "react-scroll";

import News1 from "../../assets/images/news/m1.webp";
import News2 from "../../assets/images/news/m2.webp";
import News4 from "../../assets/images/news/m4.webp";
import News5 from "../../assets/images/news/m5.webp";
import News6 from "../../assets/images/news/m6.webp";

import News8 from "../../assets/images/news/m7.webp";
import News9 from "../../assets/images/news/m8.webp";

const blog = [
  {
    type: "Market Size",
    title: "Metaverse may be $800 billion market, next tech platform",
    url: "https://www.bloomberg.com/professional/blog/metaverse-may-be-800-billion-market-next-tech-platform/",
    timeStamp: "Dec 01, 2021",
    img: News1,
  },
  {
    type: "Market Size",
    title:
      "NFTs ballooned to a $41 billion market in 2021 and are catching up to the total size of the global fine art market",
    url: "https://markets.businessinsider.com/news/currencies/nft-market-41-billion-nearing-fine-art-market-size-2022-1",
    timeStamp: "Jan 7, 2022",
    img: News2,
  },
  {
    type: "Market Size",
    title:
      "Gaming Market Worth $545.98 Billion by [2021-2028] | Fortune Business Insights™",
    url: "https://www.globenewswire.com/news-release/2021/09/22/2301712/0/en/Gaming-Market-Worth-545-98-Billion-by-2021-2028-Fortune-Business-Insights.html",
    timeStamp: "Sep 22, 2021",
    img: News9,
  },
  {
    type: "Blockchain and industry",
    title:
      "Developers tap blockchain and NFTs to take gaming to the next level",
    url: "https://www.livemint.com/technology/tech-news/developers-tap-blockchain-and-nfts-to-take-gaming-to-the-next-level-11636911606005.html",
    timeStamp: "15 Nov 2021",
    img: News4,
  },
  {
    type: "Blockchain and industry",
    title: "Blockchain Will Be the Foundation of Trust in the Metaverse",
    url: "https://www.alliancestudio.in/blog/blockchain-will-be-the-foundation-of-trust-in-the-metaverse/",
    timeStamp: "Jan 7, 2022",
    img: News5,
  },
  {
    type: "Blockchain and industry",
    title:
      "How Crypto gaming (GameFi) is coming out as the new way to make money?",
    url: "https://www.europeanbusinessreview.com/how-crypto-gaming-gamefi-is-coming-out-as-the-new-way-to-make-money/?__cf_chl_tk=qiHVizArcgPAywEgKeSgrHPtBqVZDj.yvVQvdJtSsyA-1644236911-0-gaNycGzNCRE",
    timeStamp: "Dec 30, 2021",
    img: News6,
  },
  {
    type: "Explanation",
    title: "NFTs, explained",
    url: "https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq",
    timeStamp: "Aug 18, 2021",
    img: News2,
  },
  {
    type: "Explanation",
    title:
      "Everybody is talking about 'the metaverse' all of a sudden, and I don't get it. What is this thing and why is it such a big deal?",
    url: "https://www.businessinsider.com/what-is-the-metaverse-crypto-blockchain-gaming-vr-real-estate-2022-2?IR=T",
    timeStamp: "Feb 5, 2022",
    img: News8,
  },
  {
    type: "Explanation",
    title: "What is GameFi? Blockchain games explained",
    url: "https://inlea.com/what-is-gamefi-blockchain-games-explained/",
    img: News9,
  },
];

/* eslint-disable jsx-a11y/anchor-is-valid */
const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />

      {/* Hero Start */}
      <Element id="/" name="brand">
        <section
          className="bg-half-170 d-table w-100"
          style={{ background: 'url("images/bg/market.png") bottom' }}
        >
          <div className="bg-overlay bg-gradient-primary opacity-9" />
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div className="col-12">
                <div className="section-title text-center">
                  <h4 className="title text-white title-dark fw-medium mb-4">
                    Blog &amp; News
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <section className="section">
        <div className="container">
          <div className="row">
            {blog.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="card blog blog-primary border-0 rounded shadow overflow-hidden">
                    <img src={item.img} className="img-fluid" alt="" />
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="badge bg-soft-primary">
                          {item.type}
                        </span>
                        <span className="text-muted"> {item.timeStamp} </span>
                      </div>
                      <a
                        href={item.url}
                        target={"_blank"}
                        className="title text-dark h5"
                      >
                        {item.title.substring(0, 55)}...
                      </a>
                      <div className="mt-3">
                        <a href={item.url} className="link">
                          Read More <i className="uil uil-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* Blog End */}
      {/* End */}
      <Element name="contact" id="/contact">
        <Footer />
      </Element>
    </div>
  );
};

export default News;
