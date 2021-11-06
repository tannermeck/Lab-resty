import React, { Component } from 'react';
import { Data } from '../presentation/Data';
import { SearchForm } from '../presentation/SearchForm';
import { SearchHistory } from '../presentation/SearchHistory';
import { FetchApi } from '../services/FetchApi';
import './searchContainer.css';

class SearchContainer extends Component {
    state = {
        urlSearch: '',
        method: '',
        jsonBody: {},
        data: [{"Hello": "I am bored. PLEASE make a fetch!"}],
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const retrieveData = await FetchApi(this.state.urlSearch, this.state.method, this.state.jsonBody)
        this.setState({data: retrieveData})
    }

    handleSearch = ({ target }) => {
        this.setState({ urlSearch: target.value })
    }
    handleRadioChange = ({ target }) => {
        this.setState({ method: target.value})
    }
    handleJsonText = ({target}) => {
        this.setState({jsonBody: target.value})
    }

    render() {
        return (
            <div className="container" style={{gridTemplateAreas: `'header header header' 'li body body' 'li body, body'` }}>
                <div className="header">
                    <h1>RESTless</h1>
                </div>
                <div className="body">
                    <SearchForm search={this.handleSearch} submit={this.handleSubmit} radioChange={this.handleRadioChange} jsonTextField={this.handleJsonText}/>
                    <Data data={this.state.data}/>
                </div>
                <div className="li">
                {localStorage.getItem('STORE') &&
                <SearchHistory />
                }
                </div>
            </div>
        )
    }
}
export default SearchContainer;