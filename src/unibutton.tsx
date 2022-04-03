import React from 'react';

type ButtonType ={
    name: string,
    cak:()=> void
}
export const UnyButton =(props:ButtonType)=>{
    const Funkonclick = ()=>{
        return(
            props.cak()
        )
    }
    return(
        <button onClick={Funkonclick}>{props.name}</button>
    )
}

