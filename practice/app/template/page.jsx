'use client'
// import { useEffect } from 'react'
import data from '../data/data.js'
// import axios from 'axios'

const Template = () => {



  // const getData = async () => {
  //   try {
  //     let data = await axios.get('https://automatic-space-garbanzo-5ggqqw9r5xgv3vp7w-8080.app.github.dev/data')
  //     console.log(data)

  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // useEffect(() => {
  //   getData()
  // }, [])
  return (
    <>
      <div className='banner-text'>
        <h1>{data.banner_header}</h1>
        <h5>{data.banner_header_tagline}</h5>
      </div>
      <div className="content">

        <p> {data.content_p1}
        </p>
        <p>
          {data.content_p2}
        </p>

      </div>

      <div className='footer'>

        <p>{data.footer_text} <a target='_blank' href={data.mailto_link}>{data.footer_email}</a></p>

      </div>
    </>
  )
}

export default Template