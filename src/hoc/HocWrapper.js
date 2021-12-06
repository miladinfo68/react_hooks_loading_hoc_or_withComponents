import { useState, useEffect } from 'react';

const WithData = (dataSource) => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);
    
    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await fetch(dataSource);
            const json = await data.json();
            if (json) setResults(json);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
        setLoading(false);
    }

    useEffect(() => { fetchData(); }, [dataSource]);
   
    return {
        error,
        loading,
        results
    };
}


// const dataSource = "https://api.github.com/users/royderks/repos";

const HocWrapper = () => {
    const dataSource = "https://api.github.com/users/miladinfo68/repos";
    const { loading, results, error } = WithData(dataSource);
    if (loading || error) {
        return loading ? "Loading..." : error.message;
    }

    return (
        <ul>
            {results && results.map(({ id, html_url, full_name }) => (
                <li key={id}>
                    <a href={html_url} target="_blank" rel="noopener noreferrer">
                        {full_name}
                    </a>
                </li>
            ))}
        </ul>
    );
}


export default HocWrapper
