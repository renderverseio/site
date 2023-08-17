import "./Highlight.css";
import { useEffect } from "react";

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

const HightLight = () => {
  useEffect(() => {
    Splitting({ by: "chars" });
  }, []);

  return (
    <div className="view_h">
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            rowGap: "0rem",
            textAlign: "left",
          }}
          className="high"
          data-aos="zoom-out"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <span className="general_text">
            Become a{" "}
            <span className="jump" data-splitting>
              Renderape
            </span>{" "}
            with{" "}
          </span>
          <span
            className="main"
            aria-label="RENDERVERSE"
            data-aos-once="true"
            data-splitting
          >
            RENDERVERSE
          </span>
        </div>
      </div>
    </div>
  );
};

export default HightLight;

// const HightLight = () => {
//   const [lines, setLines] = useState([]);
//   const splitRef = useRef(null);
//   useEffect(() => {
//     if (splitRef) {
//       let split_res = Splitting({ by: "chars" });
//       setLines(split_res[1].chars);
//       console.log(lines);
//     }
//   }, [splitRef]);

//   return (
//     <div
//       style={{
//         background:
//           "linear-gradient(to bottom, #557571, #2b5f68, #004861, #002f56, #111341)",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           flexDirection: "column",
//           rowGap: "2rem",
//           fontSize: "3.6rem",
//           textAlign: "center",
//         }}
//       >
//         <div>
//           Become a
//           <span
//             data-splitting="true"
//             className="headline headline--twirl"
//             style={{ fontSize: "5rem", margin: "2rem" }}
//           >
//             RENDERAPE
//           </span>
//           with
//         </div>

//         <div>
//           <span
//             data-splitting="true"
//             className="headline headline--twirl"
//             style={{ fontSize: "7rem", margin: "2rem", letterSpacing: "2rem" }}
//           >
//             RENDERVERSE
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HightLight;
