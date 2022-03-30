import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {query: ""};
    }

    handleSearch = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    render() {
        const toDosListHTML = this.props.toDosList
        .filter((it)=> it.includes(this.state.query))
        .map((it, i) => {
            return <p key={i}>{it}</p>
        });


        return <div>
        <input type="text" value={this.state.query} onChange={this.handleSearch} />
            {toDosListHTML}
        </div>
    }

}

// Pawłowi Różańskiemu +0.5

export default Search;
