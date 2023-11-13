import React from 'react';
import Faq from './Faq';
import Image from './Image';


const Card = (prop) => {
  return (
    <div className='card'>
      <article className='illustration'>
        <Image/>
      </article>
      <article className='bottomsection'>
      <h1>FAQ</h1>
      <Faq/>
      </article>
    </div>
 
  )
  
}

export default Card;
