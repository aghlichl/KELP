import React from 'react';

export default class SearchNav extends React.Component {
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
                <div className="search-bar-nav">

                    <input id="find-input-nav"
                        type="text"
                        placeholder="Find"
                        name="Find"
                        onChange={this.update('name')} />
                    <input id="near-input-nav" type="text" placeholder="Near: San Francisco" name="Location" />
                    <button className="search-button-nav">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
        );
    }
}

