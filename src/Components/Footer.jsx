import React from 'react';
import { IoLogoLinkedin, IoLogoFacebook, IoLogoGithub } from "react-icons/io";

function Footer() {
    return (<div className="footer">
        <hr></hr>
        <p>(Admin login?)</p>
        <a class="link" href="https://www.facebook.com/profile.php?id=100004455215502" target="_blank" rel="noopener">
            <IoLogoFacebook size="50px" color="black" />
        </a>
        <a class="link" href="https://www.linkedin.com/in/michael-tan-287ba4192/" target="_blank" rel="noopener">
            <IoLogoLinkedin size="50px" color="black"/>
        </a>
        <a class="link" href="https://github.com/tanmichael1" target="_blank" rel="noopener">
            <IoLogoGithub size="50px" color="black"/>
        </a>

        <p>Social Media: Facebook, Github, LinkedIn</p>
        <p>© Michael Tan</p>
    </div>);

}

export default Footer;