import React, { useEffect, useState } from "react"
import Loading from '../loading/Loading'
import CallApi from '../loading/CallApi'

const UseEffectApi = () => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    const callApi = async () => {
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
            setLoading(false);
            setUser( await res.json() );
        } catch(error){
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
         callApi()  
    }, [])

    if(loading){
        return <Loading />
    }
    return(
        <CallApi user={user} />
    )
}

export default UseEffectApi