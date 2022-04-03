import React, {useState} from 'react';
import {UnyButton} from "./unibutton";

type NewArrType = {
    banknots: string,
    value: number,
    number: string
}
type NewAlmonType = {
    arr: Array<NewArrType>
}
type CorrectType = 'Dollars' | 'RUBLS' | 'ALL'


export const Almon = (props: NewAlmonType) => {
    let currentMoney = props.arr;
    const [filter, setFilter] = useState<CorrectType>('ALL')

    if (filter === "Dollars") {
        currentMoney = props.arr.filter((FilteredMoney) => FilteredMoney.banknots === "Dollars")
    }
    if (filter === "RUBLS") {
        currentMoney = props.arr.filter((FilteredMoney) => FilteredMoney.banknots === "RUBLS")
    }
    const FilterHandler = (name: CorrectType) => {
        setFilter(name)
    }
    return (
        <>
            {currentMoney.map((item, index) => {
                return (
                    <ul>
                        <li key={index}>
                            <span>{item.banknots}</span>
                            <span>{item.value}</span>
                            <span>{item.number}</span>
                        </li>
                    </ul>
                )
            })}
            <UnyButton name={'one'} cak={() => FilterHandler("Dollars")}/>
            <UnyButton name={'two'} cak={() => FilterHandler("RUBLS")}/>
            <UnyButton name={'three'} cak={() => FilterHandler("ALL")}/>
        </>

    )

}
