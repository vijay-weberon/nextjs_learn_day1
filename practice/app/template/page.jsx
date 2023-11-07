'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Template = () => {
  const [state, setState] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/');
      setState(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log('state',state.banner_header)

  return (
    <>
      
          <div className='banner-text'>
            <h1>{state.banner_header}</h1>
            <h5>{state.banner_header_tagline}</h5>
          </div>
          <div className="content">
            <p>{state.content_p1}</p>
            <p>{state.content_p2}</p>
          </div>
          <div className='footer'>
            <p>{state.footer_text} <a target='_blank' href={state.mailto_link}>{state.footer_email}</a></p>
          </div>
      
    </>
  );
};

export default Template;
