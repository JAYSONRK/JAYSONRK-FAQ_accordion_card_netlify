import React from 'react';
import Mobile from './illustration-woman-online-mobile.svg';
import Desktop from './illustration-woman-online-desktop.svg';
import Box from './illustration-box-desktop.svg';


const Image = () => {
  let Women = {
    minWidth: '200px',
    minHeight: '200px',
  } 
 

  let BoxImg = {
              maxWidth: '10rem', 
              maxHeight: '10rem',
              transform: 'translate(-50%, 120%)' ,
              position: 'absolute',
              zIndex: '1'};

  return (
    <>
        <picture>
          <img className="box" src={Box} style={BoxImg} alt="box"/>
          <source className="womena" media='(min-width:768px)' srcSet={Desktop} style={Women}/>
          <img className="womenb" src={Mobile} alt='women'/>
        </picture>
    </>  
 
  )
  
}

export default Image;