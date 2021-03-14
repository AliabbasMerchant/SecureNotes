import React, { useEffect } from "react";
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
  };

  return (
    <div className="carousel carousel-slider center">
      <div className="carousel-fixed-item center container">
        <h2 className="white-text darken-5 hoverable">Secure Notes</h2>
        <p className="white-text flow-text darken-5 hoverable">
          Security to the next level
        </p>
      </div>
      <a
        className="carousel-item red white-text darken-1"
        // style={styles.bgColor}
        href="#one!"
      >
        <img
          src="https://cdn.pixabay.com/photo/2017/01/12/17/11/post-it-1975179__340.png"
          className="hide-on-large-only responsive-img"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/01/12/17/16/postit-1975188__340.png"
          className="hide-on-med-and-down responsive-img"
          alt=""
        />
      </a>
      <a className="carousel-item amber white-text" href="#two!">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/12/17/11/post-it-1975179__340.png"
          className="hide-on-large-only responsive-img"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/01/12/17/16/postit-1975188__340.png"
          className="hide-on-med-and-down responsive-img"
          alt=""
        />
      </a>
      <a className="carousel-item green white-text" href="#three!">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/12/17/11/post-it-1975179__340.png"
          className="hide-on-large-only responsive-img"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/01/12/17/16/postit-1975188__340.png"
          className="hide-on-med-and-down responsive-img"
          alt=""
        />
      </a>
      <a className="carousel-item blue white-text" href="#four!">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/12/17/11/post-it-1975179__340.png"
          className="hide-on-large-only responsive-img"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/01/12/17/16/postit-1975188__340.png"
          className="hide-on-med-and-down responsive-img"
          alt=""
        />
      </a>
    </div>
  );
}

export default Carousel;
