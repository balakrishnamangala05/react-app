
import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/photo1.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/Icon.png")} alt="Cursor icon" className={styles.aboutImage1}/>
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
                I'm Balakrishna, an enthusiastic problem solver with a strong focus on innovation. Currently, I'm pursuing
                master's in <b>Computer Science</b> from <b>UMBC</b>. My skills range from advanced algorithms to creating user-friendly interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/connect.png")} alt="Connect icon" className={styles.aboutImage1} />
            <div className={styles.aboutItemText}>
              <h3>✨Let's Connect</h3>
              <p>
              My goal extends beyond mere employment. I want to be part of projects that truly make a difference. 
              If you need someone who can solve problems in creative ways, loves finding new ideas, and has
              successfully delivered real results before, let's talk and see how we can work together!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};