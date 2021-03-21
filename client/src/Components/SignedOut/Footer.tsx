import React, { ReactElement } from "react";
import color from "../../Assets/color";

interface Props {}

function Footer(props: Props): ReactElement {
  const styles = {
    inlineIcon: {
      verticalAlign: "bottom",
      fontSize: "18px !important",
    },
    color: color.navColor,
  };

  return (
    <footer className="page-footer" style={styles.color}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Secure Notes</h5>
            <p className="grey-text text-lighten-4">
              Your Security is our all time priority!
            </p>
          </div>
          <div className="col l4 offset-l2 s12 ">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3 " href="#!">
                  <i className="fab fa-github"></i>
                  {"  "}
                  GitHub
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  <i className="fas fa-envelope"></i>
                  {"  "}
                  Email
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  <i className="fab fa-facebook"></i> FaceBook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">&copy; 2021 Team Secure Notes</div>
      </div>
    </footer>
  );
}

export default Footer;
