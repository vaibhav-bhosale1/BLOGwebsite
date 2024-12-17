"use client";
import { usePathname } from "next/navigation"
import styles from "./navlinks.module.css"
import Link from "next/link"

const Navlinks = ({item}) => {
    const pathname=usePathname();
  return (
    <div >
      <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>{item.title}</Link>
    </div>
  )
}

export default Navlinks
