import React, { Component, Fragment } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Fragment>
          <ul>
            <a
              href="https://discord.gg/Vdj6Bm5"
              target="_blank"
              className="nav-link"
            >
              SUPPORT
            </a>
            <a
              href="https://www.paypal.me/OrsonDC"
              target="_blank"
              className="nav-link"
            >
              DONATE
            </a>
          </ul>
        </Fragment>
      </div>
    );
  }
}

export default Footer;
