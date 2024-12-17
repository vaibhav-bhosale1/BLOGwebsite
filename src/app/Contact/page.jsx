"use client";
import React from 'react'
import Image from 'next/image';
import styles from "./contact.module.css"
const page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgcontainer}>
        <Image src="/contact.png" alt="contact"  className={styles.contactimg} fill/>
        </div>
        <div className={styles.formcontainer}>
          <form action="" className={styles.form}>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email adress' />
            <input type="text" placeholder='Phone Number' />
            <textarea name="" id="" placeholder='Message' cols="30" rows="8"></textarea>
            <button className={styles.button}>Send</button>
          </form>
        </div>
     
    </div>
  )
}

export default page
