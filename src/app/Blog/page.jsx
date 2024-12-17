"use client";
import Postcard from "@/components/postcard/Postcard";
import styles from "../Blog/blog.module.css"
const page = () => {
  return (
    <div className={styles.container}>
     <div className={styles.post}>
     <Postcard/>
     </div>
     <div className={styles.post}>
     <Postcard/>
     </div>
     <div className={styles.post}>
     <Postcard/>
     </div>
     <div className={styles.post}>
     <Postcard/>
     </div>
    </div>
  )
}

export default page
