import React from "react";
import color from "../../Assets/color";
import CardForMobile from "./CardForMobile";

interface Props {
  right: boolean;
  title: string;
  desc: string;
  small?: boolean;
}

const Card = (props: Props) => {
  const styles = {
    card: {},
    image: {
      width: "100%",
      height: "100%",
    },
    title: {
      color: color.primary,
    },
    desc: {
      color: color.primary,
    },
  };
  if (props.small) {
    return <CardForMobile title={props.title} desc={props.desc} />;
  }

  return (
    <div className="row  red lighten-5" style={styles.card}>
      <div className="col s12 m12">
        <div className="card horizontal ">
          {props.right ? (
            <>
              <div
                className="card-content right-align col s8 l8 m8"
                style={styles.desc}
              >
                <span className="card-title" style={styles.title}>
                  {props.title}
                </span>
                {props.desc}
              </div>
              <div
                className="card-image col s4 l4 m4 "
                style={{ padding: "0px" }}
              >
                <img
                  src="https://picsum.photos/300/200"
                  alt=""
                  className=" responsive-img"
                  style={styles.image}
                />
              </div>
            </>
          ) : (
            <>
              <div
                className="card-image col s4 l4 m4"
                style={{ padding: "0px" }}
              >
                <img
                  src="https://picsum.photos/300/200"
                  alt=""
                  style={styles.image}
                  className=" responsive-img"
                />
              </div>
              <div
                className="card-content col s8 l8 m8 left-align"
                style={styles.desc}
              >
                <span className="card-title" style={styles.title}>
                  {props.title}
                </span>
                {props.desc}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
