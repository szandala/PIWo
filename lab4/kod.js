
// const Hello = () => (
//     <h1>Mój komponent</h1>
// )

// lepszy UUID
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


const Item = (props) => {

    return <li>{props.text}</li>
}

const Box = props => {
    const {value, onChange, onKeyDownFunction} = props
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDownFunction}
        />
    )
}

class App extends React.Component {
    state = {
        toDoList: ["Zakupy","Zadanie z PIWa na czas", "Lekarz"],
        newItem: "",
        showWarning: false
    }
    warningNote = "Wrong entry in input"

    handleTextChange = (event) => {
        this.setState({
            newItem: event.target.value
        })
    }

    handleEnter = (event) => {
        if(event.code === "Enter"){
            if(this.state.newItem === "" || this.state.toDoList.includes(this.state.newItem)) {
                this.setState({
                    showWarning: true
                })
            } else {
                this.setState({
                    toDoList: this.state.toDoList.concat(this.state.newItem),
                    newItem: ""
                })
            }
        } else {
            this.setState({
                showWarning: false
            })
        }
    }

    render() {
        const toDos = this.state.toDoList.map(it => (
            <Item key={hashCode(it)} text={it} />
        ))
        return (
            // React.Fragment
            <>
            <h1>{this.props.text}</h1>
                <Box
                    value={this.state.newItem}
                    onChange={this.handleTextChange}
                    onKeyDownFunction={this.handleEnter}
                />
                { this.state.showWarning &&
                    <h2 style={{color:  "red"}} className="tutaj">{this.warningNote}</h2> }
                <ul>
                    {toDos}
                </ul>
            </>
        );
    }
}


ReactDOM.render(
    <App text="Witam" />,
    document.getElementById('root')
  );
