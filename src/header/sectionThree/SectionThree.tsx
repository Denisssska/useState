import React from 'react';
import c from './sectionThree.module.css';

export const SectionThree = () => {
    return (
        <div>
            <div className={c.skills}>
                <h1>My skills</h1>
            </div>
            <div className={c.container}>
                <div className={c.text}>
                    <div className={c.framework}>
                        <div><h2>image</h2></div>
                        <div>
                            <button>Listen</button>
                        </div>
                    </div>
                    <div><h2>Project name</h2></div>
                    <div><h2>Short description.</h2></div>
                </div>
                <div className={c.text}>
                    <div className={c.framework}>
                        <div><h2>image</h2></div>
                        <div>
                            <button>Listen</button>
                        </div>
                    </div>
                    <div><h2>Project name</h2></div>
                    <div><h2>Short description</h2></div>
                </div>
            </div>
        </div>

    );
};

