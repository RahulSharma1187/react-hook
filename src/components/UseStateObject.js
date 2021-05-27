import React from 'react'

const UseStateObject = () => {

    const [myObj , setMyObj] = React.useState({
        MyName: "Rahul" , MyAge: "30", MyCity: "Faridabad"
    });

    const objChng = () => {
        setMyObj({...myObj, MyName:"Rahul Sharma"});
    }

    return (
        <>
        <h6>useState , objects</h6>
       <div className="stateObj">
            <h1>MyName: {myObj.MyName} , MyAge: {myObj.MyAge}, MyCity: {myObj.MyCity}</h1>
            <div className="clickObjBtn" onClick={objChng}>Click to Change</div>
       </div>
       </>
    )
}

export default UseStateObject;