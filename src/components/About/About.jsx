import React from 'react'
import styles from './About.module.css';
import { getImageUrl } from '../../utils'

const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
    <img 
    src = {getImageUrl("about/me2.png")} 
    alt="Me sitting with a laptop"
    className={styles.aboutImage} />
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
        <img  src={getImageUrl("about/cursorIcon.png")}
         alt="Cursor icon"/>
        <div className={styles.aboutItemText}>
            <h3>Frontend Developer </h3>
            <p>
                I'm a frontend Developer with experience in building responsive 
                ans optimized sites
            </p>
        </div>
        </li>
        <li className={styles.aboutItem}>
        <img  src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
        <div className={styles.aboutItemText}>
            <h3>Backend Developer </h3>
            <p>
                I have experience developing fast and optimized back-end and API's
            </p>
        </div>
        </li>
        <li className={styles.aboutItem}>
        <img  src={getImageUrl("about/cursorIcon.png")} alt="Android icon"/>
        <div className={styles.aboutItemText}>
            <h3> Andriod Deveoper </h3>
            <p>
                I have good knowledge on android development using java and have done quite good projects in it.
            </p>
        </div>
        </li>
     </ul>
    </div>
  </section>
}

export default About
