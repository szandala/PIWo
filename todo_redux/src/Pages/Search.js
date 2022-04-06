import React from 'react';
import Item from '../Component/Item';

class Search extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            query: ""
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
            return <Item key={i} text={it}></Item>
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
