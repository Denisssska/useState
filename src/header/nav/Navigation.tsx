import React from 'react';
import c from './navigation.module.css';

export const Navigation = () => {
    return (
        <div className={c.container}>
            <div>Main</div>
            <div>Skills</div>
            <div>Projects</div>
            <div>Contacts</div>
        </div>
    );
};

