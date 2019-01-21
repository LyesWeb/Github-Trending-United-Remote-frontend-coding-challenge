import React, { Component } from 'react'
import Row from './Row';
import Loading from './Loading';
import Error from './Error';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            page: 1,
            date: '2017-10-22',
            repos: []
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        fetch(`https://api.github.com/search/repositories?q=created:>${this.state.date}&sort=stars&order=desc&page=${this.state.page}`)
        .then(response => response.json())
        .then(parsedJSON => 
            this.setState({repos: parsedJSON.items, isLoading: false})
        )
        .catch(error => 
            this.setState({ isLoading: false })
        );
    }

    render() {

        const { repos , isLoading} = this.state;

        if(isLoading) return(
            <div className='container'>
                <div className='list'>
                    <Loading desc='Loading repositories ...' />
                </div>
            </div>
        );

        let reposHtml = null;

        if(repos)
            if(repos.length!==0 && isLoading===false)
                reposHtml = repos.map((repo) => 
                    <Row key={repo.id} repo={repo} />
                )

        return (
            <div className='container'>
                <div className='list'>
                    {
                       reposHtml === null
                       ?
                       <Error desc='error !' />
                       :
                       reposHtml
                    }

                </div>
            </div>
        )
    }
}
