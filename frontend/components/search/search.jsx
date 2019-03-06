import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.searchBusinesses(this.state.name).then(() => 
        this.props.history.push('/search'))   
    }
    
    componentDidMount() {
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="search-bar">

                    <input id="find-input" 
                    type="text" 
                    placeholder="Find" 
                    name="Find"
                    onChange={this.update('name')} />
                    <input id="near-input" type="text" placeholder="Near" name="Location" />
                    <button className="search-button">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
        );
    }
}

export default Search;