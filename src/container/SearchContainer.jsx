import React, { Component } from 'react';
import { Data } from '../presentation/Data';
import { SearchForm } from '../presentation/SearchForm';
import { FetchApi } from '../services/FetchApi';

class SearchContainer extends Component {
    state = {
        urlSearch: '',
        method: '',
        jsonBody: {},
        data: []
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const retrieveData = await FetchApi(this.state.urlSearch, this.state.method, this.state.jsonBody)
        this.setState({data: retrieveData})
    }

    handleSearch = ({ target }) => {
        this.setState({ urlSearch: target.value })
    }

    render() {
        return (
            <>
                <h1>RESTless</h1>
                <SearchForm search={this.handleSearch} submit={this.handleSubmit}/>
                <Data data={this.state.data}/>
            </>
        )
    }
}
export default SearchContainer;