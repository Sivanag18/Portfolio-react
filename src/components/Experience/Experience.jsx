import React from 'react'
import skills from '../../data/skills.json';
import certification from '../../data/certification.json'
import { getImageUrl } from '../../utils';
import styles from './Experience.module.css';


const Experience = () => {
  return <section className={styles.container} id="experience">
     <h2 className={styles.title}>Experience</h2>
     
     <div className={styles.content}>

        <div className={styles.skills}>
            {
                skills.map((skills, id) => {
                    return (
                    <div key={id} className={styles.skill}> 
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skills.imageSrc)} alt={skills.title}
                            style = {{width:"80px", height:"90px"}}/>
                        </div> 
                        <p>{skills.title}</p>     
                    </div>
                    );
                })
            }
        </div>
        
          <ul className={styles.certification}>
            {
                certification.map((certi, id) => {
                    return (
                        <li key= {id} className={styles.certiItem}>
                        <img
                         src={getImageUrl(certi.imageSrc)} 
                        alt = {`${certi.organisation} Logo`}
                        style={{ width: '150px', height: '150px'}}
                        />

                        <div className={styles.certiItemDetails}> 
                         <h3> {`${certi.course},${certi.organisation}`}</h3>
                         <p>{`${certi.startDate} - ${certi.endDate}`}</p>
                        
                        </div>
                        </li>
                    )
                

                    
                })
            }
          </ul>
     </div>
  </section>
}

export default Experience
