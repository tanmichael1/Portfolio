import React from "react";
import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoGithub,
  IoIosMail,
} from "react-icons/io";

function Footer() {
  return (
    <div className="footer">
      <div className="footerIcon">
        <a
          class="link"
          href="https://www.facebook.com/profile.php?id=100004455215502"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoFacebook size="2vw" color="white" />
        </a>
        <a
          class="link"
          href="https://www.linkedin.com/in/michael-tan-287ba4192/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin size="2vw" color="white" />
        </a>
        <a
          class="link"
          href="https://github.com/tanmichael1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub size="2vw" color="white" />
        </a>
      </div>

      <p>© Michael Tan</p>
    </div>
  );
}

export default Footer;
