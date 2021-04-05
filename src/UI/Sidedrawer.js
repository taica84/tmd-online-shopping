import React from 'react';
import Backdrop from './Backdrop';
import './sidedrawer-style.css';

export default function Sidedrawer(props) {
      

    return (
        < div>
          <Backdrop show={props.open} clicked={props.closedBackdrop} />
            <div
             className={`Sidedrawer ${props.open ? 'Open' : 'Close'}`}
            >
               
            </div>
        </div>
    )
}
