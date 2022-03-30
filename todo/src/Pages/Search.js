import React from 'react';


class Search extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            query: "abc"
        }
    }

    updateQuery = (event) => {
        this.setState({
            query: event.target.value
        });
    }


    render () {
        const toDosHTML = this.props.toDos
        .filter((it) => it.includes(this.state.query))
        .map((it, i)=>{
            return <p key={i}>{it}</p>
        });

        return (
            <div>
                <input value={this.state.query} onChange={this.updateQuery}/>
                {toDosHTML}
            </div>
        )
    }
}


export default Search;
