import React, { useContext } from "react"
import { BioData } from './ComA'

const ComC = () => {
    const userName = useContext(BioData);
    return(
        <>
            <h1>HI I am  {userName}</h1>
        </>
    )
}

export default ComC;