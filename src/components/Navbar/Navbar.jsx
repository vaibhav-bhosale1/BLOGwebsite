"use client";
import Links from "../Navbar/links/Links"
import styles from "../Navbar/navbar.module.css"
import Link from "next/link"
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">Logo</Link>
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Navbar
