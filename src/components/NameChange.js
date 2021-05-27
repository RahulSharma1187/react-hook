import React, {useState} from 'react';

const NameChange = () => {
    const [myName, setMyName] = useState('Rahul');

    const nameChange = () => {
        let val = myName;
        (val === 'Rahul') ? setMyName('Rahul Sharma') : setMyName('Rahul')
    }

    return(
        <div className="nameChange">
            <h6>Use-State</h6>
            <h2>{myName}</h2>
            <div className="btnNameChange" onClick={nameChange}>Click to change</div>
        </div>
    )
};

export default NameChange;