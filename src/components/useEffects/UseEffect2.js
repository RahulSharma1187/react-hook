import React, { useEffect, useState } from "react"

const UseEffect2 = () => {

    const [widthCount, setWidthCount] = useState(window.screen.width);

    const resizeFun = () => {
        setWidthCount(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", resizeFun);
        return () => {
            window.removeEventListener("resize", resizeFun);
        }
    });

    return(
        <>
            <h6>UseState, UseEffect, cleanup Fun</h6>
            <div className="rsizeBox">
                <p>Resize and get screen Size</p>
                <h3>{widthCount}</h3>
            </div>
        </>
    )
}

export default UseEffect2;