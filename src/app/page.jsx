"use client"
import React from 'react'
import styles from "./home.module.css"
import Image from 'next/image'
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
          <h1 className={styles.title}>NOT YOUR PAGE</h1>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, asperiores accusamus consequuntur amet molestiae nemo quo quaerat blanditiis eaque, harum aliquam minus tempora repudiandae hic corrupti dicta sunt. At perferendis veritatis natus porro dolores? Numquam.
          </p>
          <div className={styles.buttons}>
            <button className={styles.button1}>Learn More</button>
            <button className={styles.button2}>Contact</button>
          </div>
          <div className={styles.brands}>
              <Image src="/brands.png" alt="brandimage" fill className={styles.brandingImg}/>
          </div>
      </div>
      <div className={styles.imagecontainer}>
          <Image src="/hero.gif" alt="hero" fill className={styles.heroImg}/>
      </div>
      
    </div>
  )
}

export default page
