import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Row from './Row';
import Loading from './Loading';
import Error from './Error';

const List = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    const [date, setDate] = useState('2017-10-22');
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try{
                const result = await axios(`https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`);
                setRepos(result.data.items);
            }catch(error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    console.log(repos);

    return (
        <div className='container'>
            <div className='list'>
            {isError && <Error desc='error !' />}
            {isLoading ? 
            <Loading desc='Loading repositories ...' />
            : 
                repos.map(repo => (
                    <Row key={repo.id} repo={repo} />
                ))
            }
            </div>
        </div>
    )
}

export default List;
