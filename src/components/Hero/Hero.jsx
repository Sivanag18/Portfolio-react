import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Siva Nagi Reddy</h1>
      <p className={styles.para}>  I’m a seasoned full-stack developer with a strong background in Android and 4 years of hands-on experience in React and Node.js. Feel free to reach out if you'd like to know more:

      </p>
      <div className={styles.btnContainer}>
      <a href="mailto:sivanagbhavanam@gmail.com" className={styles.contactBtn}> Contact Me </a>
      <a href = "/spc2new.pdf" download className={styles.cvBtn}> CV</a>
      </div>
   </div> 
      <img src={getImageUrl("hero/mine.jpg")}  alt="Hero image of me" 
      style={{width: '450px', height: '450px'}}
      className={styles.heroImg} />
      
      <div className= {styles.topBlur} />
      <div className= {styles.bottomBlur} />

  </section>
}

export default Hero;
