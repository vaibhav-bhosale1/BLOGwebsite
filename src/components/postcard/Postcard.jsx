"use client"
import styles from "./postcard.module.css"
import Image from "next/image"
import Link from "next/link"
const Postcard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgcontainer}>
            <Image src="/hailee1.jpg" alt="" fill className={styles.image}/>
            </div>
            <span className={styles.date}>01.01.2018</span>
        </div>
        
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio inventore error sequi accusamus maxime, id enim unde eveniet modi itaque iure nemo, nesciunt fuga aliquid?, ipsum.</p>
            <Link href="/Blog/post" className={styles.link}>Read more</Link>
        </div>
    </div>
  )
}

export default Postcard
