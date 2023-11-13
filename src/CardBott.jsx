import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CardBott = (prop) => {
  const [curState, setState] = useState(false);
  const que = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
  return (
      <>
      <div class="faq" onClick ={ () => setState(!curState)}>
        <div style={que}><h4 className={`${!curState && "lighter" }`}>{prop.question}</h4> 
        {curState ? (<FontAwesomeIcon className="icon" icon={faChevronUp} />) : (<FontAwesomeIcon className="icon" icon={faChevronDown} />)}</div>
        {curState && <p>{prop.answer}</p>}
      </div>  
      </>
  )
  
}

export default CardBott;