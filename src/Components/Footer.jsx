import React from 'react';
import { IoLogoLinkedin, IoLogoFacebook, IoLogoGithub, IoIosMail } from "react-icons/io";

function Footer() {
    return (<div className="footer">
        <hr></hr>
        <a class="link" href="https://www.facebook.com/profile.php?id=100004455215502" target="_blank" rel="noopener">
            <IoLogoFacebook size="50px" color="black" />
        </a>
        <a class="link" href="https://www.linkedin.com/in/michael-tan-287ba4192/" target="_blank" rel="noopener">
            <IoLogoLinkedin size="50px" color="black"/>
        </a>
        <a class="link" href="https://github.com/tanmichael1" target="_blank" rel="noopener">
            <IoLogoGithub size="50px" color="black"/>
        </a>
        <a class="link" href="mailto:michaelrstan@gmail.com" target="_blank" rel="noopener">
            <IoIosMail size="50px" color="black"/>
        </a>

        <p>© Michael Tan</p>
    </div>);

}

export default Footer;