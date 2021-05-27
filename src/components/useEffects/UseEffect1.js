import React, { useEffect, useState } from "react"

const UseEffect1 = () => {

    const [count, setCount] = useState(0);

    // if count number change then only run 
    useEffect(() => {
        if(count >= 1 ){
            document.title = `Count (${count})`
        } else{
            document.title = `Count`
        }
    }, [count]);

    // if you use [] then only run page load time
    useEffect(() => {
        console.log('Only Page Load Time')
    }, []);

    return (
        <>  
            <h6>useState, UseEffect , Page title change</h6>
            <div className="useefctBox">
                <p>{count}</p>
                <div className="btn" onClick={() => setCount(count + 1)}>Click</div>
            </div>     
        </>
    )
}

export default UseEffect1;