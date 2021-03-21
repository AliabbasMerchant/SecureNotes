import React, { useEffect } from "react";
import Notebook from "../../Images/home_notebook.gif";
import color from "../../Assets/color";

function Carousel() {
  const M = window.M;
  useEffect(() => {
    var elems1 = document.querySelectorAll(".parallax");
    var instances = M.Parallax.init(elems1, {});
    var elems2 = document.querySelectorAll(".carousel-slider");
    var instances = M.Carousel.init(elems2, {
      fullscreen: true,
      indicator: true,
    });
  }, []);

  const styles = {
    bgColor: color.carousel1,
    con: {
      margin: "2rem",
      marginTop: "0.2rem",
    },
    textCon: {
      marginTop: "4rem",
    },
    textCon2: {
      marginTop: "4rem",
      marginBottom: "4rem",
      margin: "1rem",
    },
  };

  const desc: string =
    "Secure Notes is a no profit, END-TO-END encryted notes storing website. Secure Notes has tons of features making it more secure to use than some other similar sites. Some of its features are mentioned below.";

  return (
    <div className="row purple-text" style={styles.con}>
      <div className="hide-on-large-only center-align " style={styles.textCon2}>
        <h2 className=" "> Secure Notes</h2>
        <h5 className="">Security to the next level</h5>
        <p className="">{desc}</p>
      </div>
      <div
        className="col l6 s12 hide-on-med-and-down left-align"
        style={styles.textCon}
      >
        <h2 className=" "> Secure Notes</h2>
        <h5 className="">Security to the next level</h5>
        <p className="">{desc}</p>
      </div>
      <div className="col l6 m0 s0 hide-on-med-and-down">
        <img src={Notebook} alt="" />
      </div>
    </div>
  );
}

export default Carousel;
