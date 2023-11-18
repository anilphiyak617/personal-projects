import { useEffect, useState } from "react"


export function useDebounce<T>(value: T, ms?: number): T {
    
    const [debouncedVal, setDebouncedVal] = useState(value);
    
    useEffect(() => { 
        const timer = setTimeout(() => {
            setDebouncedVal(value)
        }, ms || 5000)

        
        return () => { 
            clearTimeout(timer);
        }
    },[value])
    
    return debouncedVal
}


//  Another type of approach
// fetching or query to the database is done on the basis of the  Debounced value of the input