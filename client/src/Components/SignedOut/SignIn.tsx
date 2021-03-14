import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
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
        <img
          src={signin}
          style={styles.image}
        />
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
            <Link to="/loged">
              <button
                onClick={() => setClicked(true)}
                className="btn waves-effect lighten-1 "
                style={styles.btn}
              >
                {" "}
                Sign In{" "}
              </button>
            </Link>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
// https://internetassociation.org/wp-content/uploads/2019/02/privacy-300x169.png
// https://static.matomo.org/wp-content/uploads/2019/09/privacy-security-web-ready-1.png
// data:image/jpeg;base64,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
