import React from 'react';
import c from './sectionTwo.module.css';

export const SectionTwo = () => {
    return (
        <div>
            <div className={c.skills}>
                <h1>My skills</h1>
            </div>
            <div className={c.container}>
                <div className={c.text}>
                    <div className={c.framework}>
                        <div><h2>empty</h2></div>
                        <div><h2>React</h2></div>
                    </div>
                    <div><h2>Hi!<br/> My name is Denis.</h2></div>
                </div>
                <div className={c.text}>
                    <div className={c.framework}>
                        <div><h2>empty</h2></div>
                        <div><h2>React</h2></div>
                    </div>
                    <div><h2>Hi!<br/> My name is Denis.</h2></div>
                </div>
                <div className={c.text}>
                    <div className={c.framework}>
                        <div><h2>empty</h2></div>
                        <div><h2>React</h2></div>
                    </div>
                    <div><h2>Hi!<br/> My name is Denis.</h2></div>
                </div>

            </div>
        </div>

    );
};

