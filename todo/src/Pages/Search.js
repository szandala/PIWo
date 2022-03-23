import React from 'react';

class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {query: ""};

    }

    handleChange = (event) => {
        this.setState({query: event.target.value});
    }

    render () {
        const listOfToDosHTML = this.props.listOfToDos.filter((it)=>{
            return it.includes(this.state.query)
        }).map((it, i) => <p key={i}>{it}</p>);

        return (
            <div>
            <input type="text" value={this.state.query} onChange={this.handleChange}/>
                {listOfToDosHTML}
            </div>
        )
    }

}

export default Search;
