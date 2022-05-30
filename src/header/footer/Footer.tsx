import React from 'react';
import c from './footer.module.css';

export const Footer = () => {
    return (
        <div className={c.container}>
            <div className={c.skills}>
                <h1>Contacts</h1>
                <div className={c.logo}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
                <div>
                    <h2>2022 All rights reserved</h2>
                </div>
            </div>
        </div>

    );
};

