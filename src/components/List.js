import React, { Component } from 'react'
import Row from './Row';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            page: 1,
            repos: []
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        fetch(`https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page=${this.state.page}`)
        .then(response => response.json())
        .then(parsedJSON => 
            this.setState({repos: parsedJSON.items, isLoading: false})
        )
        .catch(error => console.log('Parsing failed', error))
    }

    render() {
        const repos = this.state.repos;
        
        return (
            <div>
                {repos.map((repo) => 
                    <Row key={repo.id} repo={repo} />
                )}
            </div>
        )
    }
}
