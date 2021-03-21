import React, { ReactElement } from "react";
import color from "../../Assets/color";

interface Props {
  title: string;
  desc: string;
  image: string;
}

function CardForMobile(props: Props): ReactElement {
  const styles = {
    card: {},
    image: {
      width: "100%",
      height: "100%",
    },
    title: {
      color: color.primary,
      fontSize: "2rem",
    },
    desc: {
      color: color.primary,
    },
  };

  return (
    <div>
      <div className="card small">
        <div className="card-image" style={styles.image}>
          <img src={props.image} style={styles.image} />
          <span className="card-title flow-text" style={styles.title}>
            {props.title}
          </span>
        </div>
        <div className="card-content" style={styles.desc}>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default CardForMobile;
