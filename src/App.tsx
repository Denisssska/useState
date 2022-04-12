import React, {useState} from 'react';

import './App.css';

import {Almon} from "./money";
import {Logika} from "./logika";
import {Mytrain} from "./newtrain/mytrain1";

function App() {
    let [a, setA] = useState(1)
    const FuncHendler = () => {

        setA(++a)

    }
    const FuncZero = () => {
        setA(a = 0)

    }

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    return (
        <div>
            <Mytrain/>


            {/*<Almon arr={money}/>*/}


            <h1>{a}</h1>
            <button onClick={FuncHendler}>number</button>
            <button onClick={FuncZero}>0</button>
            <Logika arr={money}/>
        </div>
    );
}

export default App;
