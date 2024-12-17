"use client";
import Image from "next/image";
import styles from "./singlepost.module.css"

const singlepost = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image src="/hailee1.jpg" alt="img" fill className={styles.img}/>
      </div>
      <div className={styles.textcontainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
        <Image src="/hailee1.jpg" alt="img" className={styles.avatar} width={50} height={50}/>
            <div className={styles.detailtext}>
              <span className={styles.detailtitle}>Author</span>
              <span className={styles.detailvalue}>Vaibhav Bhosale</span>
            </div>
            <div className={styles.detailtext}>
              <span className={styles.detailtitle}>Published</span>
              <span className={styles.detailvalue}>01.01.2018</span>
            </div>
        </div>
        <div className={styles.content}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates perferendis delectus similique odit. Tenetur iure amet esse consequatur provident est officia expedita ea quam eligendi labore in tempora, temporibus quidem cum numquam dolor facilis.
        </div>
      </div>
    </div>
  )
}

export default singlepost
