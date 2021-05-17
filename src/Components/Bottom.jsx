import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Bottom = () => {
    return(
        <React.Fragment>
            <div className = "bottom-div">
                <a href = "https://www.facebook.com/profile.php?id=100052045482259"><FacebookIcon id = "icon"/></a>
                <a href = "https://www.instagram.com/aniqa7697/"><InstagramIcon id = "icon"/></a>
                <a href = "#"><YouTubeIcon id = "icon"/></a>
                <a href = "https://twitter.com/AyubAniqa"><TwitterIcon id = "icon"/></a>
                <a href = "https://www.linkedin.com/feed/"><LinkedInIcon id = "icon"/></a>
                <a href = "https://github.com/aniqaayub"><GitHubIcon id = "icon"/></a>
                <p>&#169;{" "}2021{" "} | {" "} <strong>ANIQA AYUB</strong>{" "} | {" "} ALL RIGHTS RESERVED.</p>
            </div>
        </React.Fragment>
    );
}
export default Bottom;