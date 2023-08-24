import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortContr = new AbortController();

        fetch(url,  {signal: abortContr.signal})
        .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch the data for that resource.');
            }
            return res.json();
        })
        .then((data) => {
            setData(data);
            setError(null);
        })
        .catch(err => {
            setError(err.message);
        })

        return () => abortContr.abort();
    }, [url]);
    
    return {data, error};
}

export default useFetch;