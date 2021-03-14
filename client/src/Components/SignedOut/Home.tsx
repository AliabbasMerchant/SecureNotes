import React, { useEffect } from "react";
import color from "../../Assets/color";
import Card from "./Card";
import CardForMobile from "./CardForMobile";
import Carousel from "./Carousel";
import Footer from "./Footer";
declare global {
  interface Window {
    M: any;
  }
}

const styles = {
  topic: {
    borderRadius: "100px",
    marginTop: "10px",
  },
  text: {
    paddingBottom: "10px",
    paddingTop: "10px",
    fontSize: "30px",
    color: color.primary,
  },
};

const Home: () => JSX.Element = () => {
  console.log(window.innerWidth);
  return (
    <>
      <Carousel />
      <div className=" grey lighten-2  hoverable" style={styles.topic}>
        <p className="title flow-text" style={styles.text}>
          What We Provide
        </p>
      </div>
      <div className="container">
        <Card
          small={window.innerWidth <= 450 ? true : false}
          right={false}
          title="Realtime Updations"
          desc="All of your saved notes will be updated in realtime. 
          Making it more convinient to use in cases of the user very frequently switching between devices.
          "
        />
        <Card
          small={window.innerWidth <= 450 ? true : false}
          right
          title="Security"
          desc="All of your notes will be END-TO-END Encrypted.
          Making the site more secure to use.
          Moreover, protecting your privacy to maximum possible level."
        />
        <Card
          small={window.innerWidth <= 450 ? true : false}
          right={false}
          title="Reminders"
          desc="The user has the privilage of setting a reminder with each note (s)he makes.
          Leading to better management of user's time."
        />
        <Card
          small={window.innerWidth <= 450 ? true : false}
          right
          title="Password Protected Notes"
          desc="The user is allowed to add a password to a particular note.
          Allowing the user to keep any important stuff like credentials or any personal note secured whilest in workspace."
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
