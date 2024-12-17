"use client";
import styles from "../About/about.module.css"
import Image from "next/image"
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
          <h1 className={styles.title}>PARENTAL ADVISORY EXPLICIT CONTENT MAY HARM HEALTH</h1>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, asperiores accusamus consequuntur amet molestiae nemo quo quaerat blanditiis eaque, harum aliquam minus tempora repudiandae hic corrupti dicta sunt. At perferendis veritatis natus porro dolores? Numquam.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1 className={styles.boxestitle}>10k</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1 className={styles.boxestitle}>10k</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1 className={styles.boxestitle}>10k</h1>
              <p>Year of experience</p>
            </div>
          </div>
        
      </div>
      <div className={styles.imagecontainer}>
          <Image src="/about.png" alt="hero" fill className={styles.heroImg}/>
      </div>
      
    </div>
  )
}

export default page
