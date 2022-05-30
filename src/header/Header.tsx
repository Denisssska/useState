import React from 'react';
import c from './header.module.css';
import {Navigation} from "./nav/Navigation";

export const Header = () => {
    return (
        <div className={c.header}>
            <Navigation/>
        </div>
    );
};

