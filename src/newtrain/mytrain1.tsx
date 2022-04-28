import React, {useState} from 'react';

import {Mytrainbutton1} from "./mytrainbutton1";

export type ArrType = {
    id: number,
    name: string,
    priority: string
}
export type FiltType = 'high' | 'low' | 'middle' | 'all'


export const Mytrain = () => {

    let [newArr, setNewArr] = useState([ // need to fix any
        {id: 1, name: 'React', priority: 'high'},
        {id: 2, name: 'React', priority: 'low'},
        {id: 3, name: 'games', priority: 'low'},
        {id: 4, name: 'work', priority: 'high'},
        {id: 5, name: 'html & css', priority: 'middle'},
    ])
    const deleteFun = (id: number) => {
        setNewArr(newArr.filter((item) => item.id !== id))
    }
    let [filt, setFilt] = useState<FiltType>('all')
    let arrFilter = newArr

    if (filt === 'high') {
        arrFilter = newArr.filter((item) => item.priority === 'high')
    }
    if (filt === 'middle') {
        arrFilter = newArr.filter((item) => item.priority === 'middle')
    }
    if (filt === 'low') {
        arrFilter = newArr.filter((item) => item.priority === 'low')
    }


    return (
        <div>

            <Mytrainbutton1
                setFilt={setFilt}
                arrFilter={arrFilter}
                deleteFun={deleteFun}

            />
        </div>
    );
};

