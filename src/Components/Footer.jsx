import React from "react";
import { IoLogoLinkedin, IoLogoFacebook, IoLogoGithub } from "react-icons/io";

function Footer() {
  return (
    <div className="footer">
      <div className="footerIcon">
        <a
          className="link"
          href="https://www.facebook.com/profile.php?id=100004455215502"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoFacebook size="3.5rem" color="white" />
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/michael-tan-287ba4192/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin size="3.5rem" color="white" />
        </a>
        <a
          className="link"
          href="https://github.com/tanmichael1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub size="3.5rem" color="white" />
        </a>
      </div>

      <p>© Michael Tan</p>
    </div>
  );
}

export default Footer;
