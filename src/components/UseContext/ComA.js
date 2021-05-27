import React, { createContext } from "react"
import ComB from './ComB'

const BioData =  createContext();

const ComA = () => {
    return(
        <>
            <h6>Prop Drilling, Context API & useContext Hook </h6>
            <p>What is Context API = Context, Provider, Consumer <br></br>
                and what is useContext = In Context API has a Consumer is too lengthy so we use useContext for reduce
            </p>
            <div className="useContext">
                <BioData.Provider value={"Rahul Developer"}>
                    <ComB />
                </BioData.Provider>                
            </div>
        </>
    )
}

export default ComA;
export { BioData }