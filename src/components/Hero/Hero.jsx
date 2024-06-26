import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

import resume from "../../assets/Balakrishna Mangala Resume.docx.pdf";

import { SocialIcon } from 'react-social-icons';
import { useSpring, animated } from 'react-spring';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faInstagram,faLinkedin,faGithub,faFontAwesome } from '@fortawesome/free-brands-svg-icons'

export const Hero = () =>{
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Balakrishna Mangala</h1>
                <p className={styles.description}>
                &rarr; Full-Stack Developer Specializing in ReactJS, Node.js | Experienced Software Engineer at Capgemini.<br></br>
                &rarr; A Computer Science Student who is passionate about building and enhancing software products.
                </p>
                <a href={resume} download='resume' className={styles.contactBtn}>Resume</a>
                <div className={styles.social_icons}>
                    <SocialIcon className={styles.facebook_icon} url="https://www.facebook.com/profile.php?id=100030296746720" />
                    <SocialIcon className={styles.linkedin_icon} url="https://www.linkedin.com/in/balakrishnamangala/" />
                    <SocialIcon className={styles.twitter_icon} url="https://www.twitter.com/" />
                    <SocialIcon className={styles.instagram_icon} url="https://www.instagram.com/balachenni_balakrishna/" />
                    <SocialIcon className={styles.github_icon}  bgColor="white" fgColor="black" url="https://github.com/balakrishnamangala05" />
                </div>
                
            </div>
            <img
             src={getImageUrl("hero/photo.png")}
             alt="Hero image of me" 
             className={styles.heroImg}
             />
            <div className={styles.topBlur} />
            <div className={styles.bottmBlur} />
        </section>
    );
}