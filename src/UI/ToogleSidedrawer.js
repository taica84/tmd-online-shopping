import React from 'react';
import './toogle-sidedrawer-style.css';

export default function SidedrawerToogle(props) {
    return (
        <div onClick={props.clicked} className='DrawerToggle ' >
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}