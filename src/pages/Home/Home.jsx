import React, { useEffect, Suspense } from "react";
import Loader from "../../components/Loader/Loader";
import { Element } from "react-scroll";

// const Tagline = React.lazy(() => import("../../components/Tagline/Tagline"));
const Navbar = React.lazy(() => import("../../components/Navbar/Navbar"));
const RenderVerse = React.lazy(() => import("./Renderverse/RenderVerse"));
const FeaturedIn = React.lazy(() => import("./FeaturedIn/FeaturedIn"));
const Mission = React.lazy(() => import("./Misison"));
const EcoSystem = React.lazy(() => import("./EcoSystem"));
const HighLight = React.lazy(() => import("./Highlight/Highlight"));
const Disrupting = React.lazy(() => import("./Disrupting/Disrupting"));
const RoadMap = React.lazy(() => import("./RoadMap"));
const Team = React.lazy(() => import("./Team"));
const Footer = React.lazy(() => import("../../components/Footer/Footer"));

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Suspense fallback={Loader}>{/* <Tagline /> */}</Suspense>
      <Suspense fallback={Loader}>
        <Navbar />
      </Suspense>

      <Element id="/" name="brand">
        <Suspense fallback={Loader}>
          <RenderVerse />
        </Suspense>
      </Element>

      <Suspense fallback={Loader}>
        <FeaturedIn
          title={"To be soon Featured In..."}
          isFeatured={true}
          hasBackers={true}
        />
      </Suspense>

      <Element id="/mission" name="mission">
        <div>
          <Suspense fallback={Loader}>
            <Mission />
          </Suspense>
        </div>
      </Element>

      <Element id="/eco-system" name="eco-system">
        <Suspense fallback={Loader}>
          <EcoSystem />
        </Suspense>
        <Suspense fallback={Loader}>
          <Disrupting />
        </Suspense>
        <Suspense fallback={Loader}>
          <HighLight />
        </Suspense>
      </Element>

      <Element id="/roadmap" name="roadmap">
        <Suspense fallback={Loader}>
          <RoadMap />
        </Suspense>
      </Element>

      <Element id="/team" name="team">
        <Suspense fallback={Loader}>
          <Team />
        </Suspense>
      </Element>

      <Suspense fallback={Loader}>
        <FeaturedIn
          title={"Advisors and Backers"}
          isFeatured={false}
          hasBackers={false}
        />
      </Suspense>
      <Element id="/contact" name="contact">
        <Suspense fallback={Loader}>
          <Footer animation={"flip-left"} duration={400} ease={"linear"} />
        </Suspense>
      </Element>
    </div>
  );
};
export default Home;
