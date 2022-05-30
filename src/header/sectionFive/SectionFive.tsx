import React from 'react';
import c from './sectionFive.module.css';

export const SectionFive = () => {
    return (
        <div className={c.container}>
            <div className={c.skills}>
                <h1>Contacts</h1>
                <div className={c.inputs}>
                    <div><input type="text"/></div>
                    <div><input type="text"/></div>
                    <div><textarea></textarea></div>
                </div>
                <div>
                    <button className={c.button}>Send</button>
                </div>
            </div>
        </div>

    );
};

