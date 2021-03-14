import React from "react";
import color from "../../Assets/color";

interface Props {
  title: string;
}

const SideNavOptMob = (props: Props) => {
  const styles = {
    cont: {
      height: "3rem",
      margin: "0px",
      padding: "0px",
      verticalAlign: "center",
      borderTopRightRadius: "1.5rem",
      borderBottomRightRadius: "1.5rem",
      ...color.navColor,
    },
    text: {
      color: "white",
      paddingLeft: "1rem",
    },
  };

  return (
    <div
      className=" valign-wrapper hoverable scale-transition  z-depth-1 "
      style={styles.cont}
    >
      <p style={styles.text}>{props.title}</p>
    </div>
  );
};

export default SideNavOptMob;
