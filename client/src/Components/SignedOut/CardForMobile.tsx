import React, { ReactElement } from "react";
import color from "../../Assets/color";

interface Props {
  title: string;
  desc: string;
}

function CardForMobile(props: Props): ReactElement {
  const styles = {
    card: {},
    image: {
      width: "100%",
      height: "100%",
    },
    title: {
      color: color.secondary,
    },
    desc: {
      color: color.primary,
    },
  };

  return (
    <div>
      <div className="card small">
        <div className="card-image" style={styles.image}>
          <img src="https://picsum.photos/300/200" />
          <span className="card-title yellow-text" style={styles.title}>
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
