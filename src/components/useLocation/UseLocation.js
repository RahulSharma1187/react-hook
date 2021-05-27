import React from 'react'
import { useLocation, useHistory } from 'react-router-dom';

const UseLocation = () => {
    const location = useLocation();
    const history = useHistory();
    return(
        <>  
            <h6>UseLocation and useHistory</h6>
            <div>
                This is { location } page
            </div>
            <button onClick={() => history.push('./index')} >Home</button>
        </>
    )
}

export default UseLocation;