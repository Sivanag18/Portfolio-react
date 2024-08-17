import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css';

const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")}
             alt = "Email Icon" />
             <a href="mailto:myemail@email.com">sivanagbhavanam@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")}
             alt = "LinkedIn Icon" />
             <a href="https://www.linkedin.com/in/sivanagbhavanam/">linkedin.com/sivanag</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")}
             alt = "GitHub Icon" />
             <a href="https://github.com/Sivanag18">github.com/sivanag</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/leetcode.png")}
             alt = "LeetCode Icon"
             style={{width:"50px", height:"50px"}} />
             <a href="https://leetcode.com/u/SivaNag94/">leetcode/sivanag</a>
        </li>
        {/* <li className={styles.link}>
            <img src={getImageUrl("contact/gfg.png")}
             alt = "Geeksforgeeks Icon"
             style={{width:"50px", height:"50px"}}
               />
             <a href="https://www.geeksforgeeks.org/user/sivanagbw8gx/">gfg/sivanag</a>
        </li> */}
    </ul>
  </footer>
}

export default Contact
