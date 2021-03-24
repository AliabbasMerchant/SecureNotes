import React, { useEffect } from "react";
import color from "../../Assets/color";
import Card from "./Card";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Security from "../../Images/security.png";
import Realtime from "../../Images/realtime.png";
import Protected from "../../Images/protected.png";
import Reminders from "../../Images/reminders.png";
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
  card: {
    marginBottom: 4,
  },
};

const Home: () => JSX.Element = () => {
  return (
    <>
      <Carousel />
      <div className=" grey lighten-2  hoverable" style={styles.topic}>
        <p className="title flow-text" style={styles.text}>
          What We Provide
        </p>
      </div>
      <div className="row container">
        <div className="col s12 m6 " style={styles.card}>
          <Card
            image={Realtime}
            title="Realtime Updations"
            desc="All of your saved notes will be updated in realtime. 
          Making it more convinient to use in cases of the user very frequently switching between devices.
          "
          />
        </div>
        <div className="col s12 m6" style={styles.card}>
          <Card
            image={Security}
            title="Security"
            desc="All of your notes will be END-TO-END Encrypted.
          Making the site more secure to use.
          Moreover, protecting your privacy to maximum possible level."
          />
        </div>
        <div className="col s12 m6 l6 " style={styles.card}>
          <Card
            image={Reminders}
            title="Reminders"
            desc="The user has the privilage of setting a reminder with each note (s)he makes.
          Leading to better management of user's time."
          />
        </div>
        <div className="col s12 m6 l6 " style={styles.card}>
          <Card
            image={Protected}
            title="Password Protected Notes"
            desc="The user is allowed to add a password to a particular note.
          Allowing the user to keep any important stuff like credentials or any personal note secured whilest in workspace."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
