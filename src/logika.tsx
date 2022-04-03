import React, {useState} from 'react';
import {UnyButton} from "./unibutton";

type MassType = {
    banknots: string,
    value: number,
    number: string
}
type NewArrType = {
    arr: Array<MassType>
}
export const Logika = (props: NewArrType) => {

    let rubli = props.arr.filter((item) => {
        return item.banknots === "RUBLS"
    })

    let dollar = props.arr.filter((item) => {
        return item.banknots === "Dollars"
    })
    let [filtered, setFilter] = useState("All")
    const Fun = (moneti: string) => {
        setFilter(moneti)
    }
    let Allmoney = props.arr;

    if (filtered === 'RUBLS') {
        Allmoney = rubli

    }
    if (filtered === "Dollars") {
        Allmoney = dollar
    }


    return (
        <div>

            <ul>
                {Allmoney.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknots}</span>
                            <span>{item.value}</span>
                            <span>{item.number}</span>
                        </li>)
                })}

            </ul>
            <UnyButton name={'RUBLI'} cak={() => Fun('RUBLS')}/>
            <UnyButton name={'Dollar'} cak={() => Fun('Dollars')}/>
            <UnyButton name={'All'} cak={() => Fun('All')}/>
        </div>
    )
}
