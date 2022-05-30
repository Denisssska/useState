import React from 'react';
import c from './section.module.css';
import img from './img/img.png';

export const Section = () => {
    return (
        <div className={c.border}>
            <div className={c.text}>
                <h1>Hi!<br/> My name is Denis.<br/>I am front-end developer.</h1>
            </div>
            <div><img height={'230px'} src={img} alt="photo"/></div>
        </div>
    );
};

