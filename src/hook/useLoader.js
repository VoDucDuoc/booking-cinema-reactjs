import React, {useState, useEffect} from 'react'
import Loading from '../components/loading';

export default function useLoader() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },1500)
    }, [])
    return [
        loading ? <Loading/> : null
    ]
}
