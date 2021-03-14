import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

interface Props {
  color: string;
}

const Card = (props: Props) => {
  const styles = {
    cont: {
      height: "10rem",
      marginTop: "0rem",
      padding: "2rem",
      borderRadius: "2rem",
    },
  };

  const [flip, setFlip] = useState(false);

  return (
    <div className="col s4 ">
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <a onClick={() => setFlip((prevSt) => !prevSt)}>
          <div style={styles.cont} className={`darken-4 ${props.color} card`}>
            <div className="card-title white-text "> Title</div>
          </div>
        </a>
        <a onClick={() => setFlip((prevSt) => !prevSt)}>
          <div style={styles.cont} className={`darken-4 ${props.color} card`}>
            <div className="card-content white-text ">
              {" "}
              This is your saved data{" "}
            </div>
          </div>
        </a>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
