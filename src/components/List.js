import React, { useState, useEffect } from 'react'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import uuid from 'uuid/v4';
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
        fetchData();
    }, [page]);

    const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try{
            const result = await axios(`https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`);
            setRepos(repos.concat(result.data.items));
        }catch(error) {
            setIsError(true);
        }
        setIsLoading(false);
    };

    return (
        <div className='container'>
            <div className="loaderWrapper">
                {isLoading && <Loading desc='Loading repositories ...' />}
            </div>
            <div className='list' id="list">
            <InfiniteScroll
                dataLength={repos.length}
                next={() => setPage(page+1)}
                hasMore={true}
                scrollableTarget="list"
                endMessage={<p style={{textAlign: 'center'}}>Yay! You have seen it all</p>}
            >
                {isError && <Error desc='Error loading repositories !' refresh={fetchData} />}
                {repos.map(repo => (
                    <Row key={uuid()} repo={repo} />
                ))}
            </InfiniteScroll>
            </div>
        </div>
    )
}

export default List;
