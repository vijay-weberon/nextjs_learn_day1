import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div>page js</div>
    <Link href="/data">
        <p>Data page</p>
      </Link>
      <Link href="/user">
      user page</Link>
      <hr></hr>
      <Link href="/template">
      template page</Link>
  </>)
}

export default page