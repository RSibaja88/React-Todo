import React from "react";



class TodoForm extends React.Component {
   
    taskData;

    constructor(props) {
        super(props);
        this.handleChanges = this.handleChanges.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);

        this.state = {
            todoName: ""
        };
    } 


//Events
handleChanges = e => {
    this.setState({todoName: e.target.value });
};

handleAddTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoName);
    };


//Life Cyccle
componentDidMount() {
    this.taskData = JSON.parse(localStorage.getItem('task'));

    if (localStorage.getItem('task')) {
        this.setState({
            todoName: this.taskData.task
        })
    } else {
        this.setState({
            todoName: ""
        })
    }

}

componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('todo', JSON.stringify(nextState));
}

render() {
    console.log("todo form");
    return (
        <form onSubmit={this.handleAddTodo}>
            <input
                type="text"
                name="todo"
                value={this.state.todoName}
                onChange={this.handleChanges}
            />
            <button>Add Task</button>
        </form>
    );
}
}

export default TodoForm;
