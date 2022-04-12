import React from 'react';
import {ArrType} from "./mytrain1";
import {FiltType} from "./mytrain1";

type FiltPropsType = {
    setFilt: (filt: FiltType) => void
    arrFilter: Array<ArrType>
    deleteFun: (id: number) => void


}
export const Mytrainbutton1 = (props: FiltPropsType) => {


    const onclickLow = () => {
        props.setFilt('low')
    }
    const onclickHigh = () => {
        props.setFilt('high')
    }
    const onclickmidd = () => {
        props.setFilt('middle')
    }


    const onClickButtonHandler = (filt: FiltType) => {
        props.setFilt(filt)
    }
    const funkDel = (id: number) => {
        props.deleteFun(id)

    }
    return (
        <div>
            {props.arrFilter.map((item: ArrType, index: number) => <div>{item.name}
                <button key={item.id} onClick={() => funkDel(item.id)}>del</button>

            </div>)}
            <button onClick={onclickHigh}>high</button>
            <button onClick={onclickmidd}>middle</button>
            <button onClick={onclickLow}>low</button>
            <button onClick={() => onClickButtonHandler('all')}>all</button>
        </div>
    );
};
