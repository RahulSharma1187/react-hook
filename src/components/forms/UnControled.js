import React, {useState, useRef} from 'react'

const UnControled = () => {
    
    const luckyName = useRef(null);
    const [userName, setUseName] = useState(false);

    const submtFrm = (e) => {
        e.preventDefault();
        const name = luckyName.current.value
        name === "" ? alert('Please fill data') : setUseName(true);
    }

    return(
        <>
        <h6>UnController Form ,  UseState, UseRef</h6>
        <div className="uncontroledForm">
            <form onSubmit={submtFrm}> 
                <label htmlFor="luckyName">Your Lucky Name</label>
                <input type="text" ref={luckyName} ></input>
                <button type="submit">Submit</button>
            </form>
            <p>
                {userName ? `You Lucky Name is ${luckyName.current.value}`: ""}
            </p>
        </div>
        </>
    )
}

export default UnControled