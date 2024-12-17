"use client";
import Link from "next/link"
const notfound= () => {
  return (
    <div>
      <h1>THE page ur looking for doesnt exist</h1>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default notfound
