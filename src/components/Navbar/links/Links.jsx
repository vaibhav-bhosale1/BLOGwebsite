"use client";

import { useState } from "react"
import styles from "../links/links.module.css"
import Navlinks from '../Navlinks/Navlinks'
import Image from "next/image";
const Links = () => {
  const [open,setOpen]=useState(false);
    const links=[
        {
            title:"Homepage",
            path:"/"
        },
        {
           title:"About",
           path:"/About"
        },
        {
            title:"Contact",
            path:"/Contact"
        },
        {
           title:"Blog",
           path:"/Blog"
        },
  
    ]

const session =true;
const isAdmin=true;

  return (
   
   <div className={styles.container}>
          <div className={styles.links}>
                {links.map((link=>(
                        <Navlinks item={link} key={link.title}/>
                )))}{
                  session ? (
                    <>
                    { isAdmin && <Navlinks item={{title: "Admin",path:"/Admin"}}/> }
                    <button className={styles.logout}>Logout</button>
                    </>
                  ) :(
                    <Navlinks item={{title: "Login",path:"/login"}}/>
                  )
                }
          </div>

          <Image src="/menu.png" className={styles.menubutton} alt="button" height={30} width={30}  onClick={()=>{setOpen((prev)=>!prev)}}/>
          {
            open && (
            <div className={styles.mobilelinks}>  
              {links.map((link)=>(
                    <Navlinks item={link} key={link.title}/>
              ))}
            </div>
         ) }
   
 </div>
  )
}

export default Links;
