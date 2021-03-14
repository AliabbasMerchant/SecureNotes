import React from "react";
import Card from "../SignedIn/Card";

interface Props {}

const NotesOverview = (props: Props) => {
  const styles = {
    headerText: {
      padding: "0.5rem",
      borderRadius: "100px",
    },
  };

  return (
    <div>
      <h4
        className="grey lighten-3  hoverable purple-text"
        style={styles.headerText}
      >
        Private Notes
      </h4>
      <div className="row">
        <Card color="red" />
        <Card color="yellow" />
        <Card color="green" />
      </div>

      <h4
        className="grey lighten-3  hoverable purple-text"
        style={styles.headerText}
      >
        Regular Notes
      </h4>
      <div className="row">
        <Card color="red" />
        <Card color="yellow" />
        <Card color="green" />
      </div>
    </div>
  );
};

export default NotesOverview;
