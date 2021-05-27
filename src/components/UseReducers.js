import React, { useReducer } from "react"

const initialState = 0;

const reducer = (state, action) => {
    if(action.type === "INCREMENT"){
        return state + 1;
    }
    if(action.type === "DECREMENT"){
        return state - 1;
    }
    return state;
}

const UseReducers = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <>
            <h6>UseReducers</h6>
            <div className="useReducers">
                <p>{state}</p>
                <input type="submit" value="Increment" className="useRdcrBTn" onClick={() => dispatch({type:"INCREMENT"})}></input>
                <input type="submit" value="Decrement" className="useRdcrBTn" onClick={() => dispatch({type:"DECREMENT"})}></input>
            </div>
        </>
    )
}

export default UseReducers