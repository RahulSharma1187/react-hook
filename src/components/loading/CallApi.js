import React from 'react'
import { FcApproval } from "react-icons/fc";


const CallApi = ({user}) => {
    return(
        <>
        <h6>UseState, UseEffect, fetch API, Props, Loading Div, React Icon</h6>
        <div className="greybg">
            {
                user.map((curntElm) => {
                    return(
                        <div className="colFetch" key={curntElm.id}>
                            <div className="colFetchBox">
                                <div className="imgSpace">
                                    <img src={curntElm.thumbnailUrl} title="" alt="" />
                                </div>
                                <div className="imgDtl">
                                    <h2>{curntElm.title} <FcApproval /></h2>
                                    <a href={curntElm.url} target="_blank">Click Here</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default CallApi;