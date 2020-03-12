import React from "react";



class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoName: ""
        };
    }
handleChanges = e => {
    this.setState({todoName: e.target.value });
};

handleAddTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoName);
    };


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
