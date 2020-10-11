import {useState} from 'react'

export default function useCount() {
    const [count, setCount] = useState(0);
    
    const increase = () =>{
        setCount(count + 1);
    };
    const decrease = () =>{
        if(count === 0 ){
            setCount(0);
        }else{
            setCount(count - 1 );
        }
        
    }
    return {count, increase, decrease}
}
