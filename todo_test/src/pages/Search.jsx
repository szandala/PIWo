import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {query: "ec"};
    }

    updateQuery = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    render() {
        const filteredList = this.props.listOfToDos.filter((it)=>it.includes(this.state.query)).map(it=>{
            return <p>{it}</p>
        })

        return (<div>
        <h1>Cześć, {this.props.text}</h1>
        <input value={this.state.query} onChange={this.updateQuery}/>
        {filteredList}
        </div>
        )
    }
}

export default Search;
