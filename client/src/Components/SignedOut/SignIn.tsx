import React, { ReactElement, useState } from "react";
import color from "../../Assets/color";
import signin from "../../Images/signin.gif";

interface Props {}

function SignIn(props: Props): ReactElement {
  const styles = {
    card: {
      borderRadius: "3rem",
      marginTop: "4rem",
      paddingRight: "5rem",
      paddingLeft: "5rem",
      paddingTop: "1rem",
      ...color.navColor,
    },
    text: {
      padding: "5px",
    },
    image: {
      borderRadius: "3rem",
      marginTop: "3rem",
      width: "30rem",
    },
    con: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
    btn: {
      backgroundColor: color.secondary,
      fontWeight: 700,
    },
  };

  const [clicked, setClicked] = useState(false);

  return (
    <div className="row" style={styles.con}>
      <div className="col hide-on-med-and-down l6 ">
        <img src={signin} style={styles.image} />
      </div>
      <div className="col s12 l6 ">
        <div className="card purple" style={styles.card}>
          {clicked ? (
            <div className="progress purple">
              <div className="indeterminate white"></div>
            </div>
          ) : null}
          <h3 className="hoverable white-text lighten-4 " style={styles.text}>
            Welcome Back
          </h3>
          <br></br>
          <form>
            <div className="input-field">
              <input type="text" className="white-text" id="username" />
              <label className="" htmlFor="username">
                Username
              </label>
            </div>
            <div className="input-field">
              <input
                type="password"
                id="password"
                className="validate white-text"
              />
              <label className="" htmlFor="password">
                Password
              </label>
            </div>
            <button
              onClick={() => setClicked(true)}
              className="btn waves-effect lighten-1 "
              style={styles.btn}
            >
              {" "}
              Sign In{" "}
            </button>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
