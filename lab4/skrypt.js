
function hashCode(str) {
    let hash = 0;
    if (str.length == 0) return hash;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

const Item = (props) => (
    <li>{props.text}</li>
)

const Box = (props) => {
    return (
        <input
            type="text"
            name="newItemValue"
            value={props.newItemValue}
            onChange={props.handleOnChange}
            onKeyDown={props.handleOnKey}
        />
)
}


class ToDo extends React.Component {

    state = {
        toDoList: ["Zakupy", "Zadanie z PIWa", "Lekarz"],
        newItemValue: "",
        showWarning: false
    }
    errorMessage = "Wrong entry value"

    handleNewEntry = (event) => {
        this.setState({
            newItemValue: event.target.value
        })
    }

    handleEnter = (event) => {
        if(event.code === "Enter"){
            if(this.state.toDoList.includes(this.state.newItemValue)){
                this.setState({
                    showWarning: true
                })
            } else {
                this.setState({
                    toDoList: this.state.toDoList.concat(this.state.newItemValue),
                    newItemValue: "",
                    showWarning: false

                })
            }
        } else {
            this.setState({
                showWarning: false
            })
        }
    }
    // it => ( )
    render() {
        const myList = this.state.toDoList.map(it => (
            <Item text={it} key={hashCode(it)} />
        ))

        return (
            //React.Fragment
            <>
                <h2>{this.props.dummyText}</h2>
                <Box
                    newItemValue={this.state.newItemValue}
                    handleOnChange={this.handleNewEntry}
                    handleOnKey={this.handleEnter}
                />

               {this.state.showWarning && <h1 style={{color: "red"}}>{this.errorMessage}</h1> }
                <ul>
                    {myList}
                </ul>
            </>
        );
    }
}

ReactDOM.render(
    <ToDo dummyText="Witaj Dniu" />,
    document.getElementById('root')
);
