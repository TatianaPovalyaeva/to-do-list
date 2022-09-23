import { Component } from "react";
import check from './check.png';
export class TodoList extends Component {

    state = {
        userInput:"",
        list: [],
    }

    onCangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert('Введите, пожалуйста, данные')
        }
        else {
        let listArray = this.state.list;
        listArray.push(input)
        this.setState({ list: listArray, userInput:'' })
        }
    }

    crosseWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.list;
        listArray = [];
        this.setState({ list: listArray })
    }    

    
    onFormSubmit(e) {
        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <div>
                        <input className="textInput" type="text"
                        placeholder="Твои дела на сегодня"
                        onChange={(e) => { this.onCangeEvent(e.target.value) }}
                        value = {this.state.userInput} />
                    </div>
                    <div>
                        <button className="btnOne" onClick={() => this.addItem(this.state.userInput)}>Добавить</button>
                    </div>
                    <ul>
                        {this.state.list.map((item, index) => (
                            <li onClick={this.crosseWord} key={index}>{item}
                        <img src={ check } width="30px" alt="check"/>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button className="btnTwo" onClick={() => this.deleteItem()}>Удалить</button>
                    </div>
                </div>
            </form>
        )
    }
}
