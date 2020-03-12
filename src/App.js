import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';



const stockTasks = [
  {
    task: 'Shower',
    id: Math.random(),
    completed: false
  },
  {
    task: 'Get Dressed',
    id: Math.random(),
    completed: false
  },
  {
    task: 'Eat Breakfast',
    id: Math.random(),
    completed: false
  },
  {
    task: 'Brush Teeth',
    id: Math.random(),
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: stockTasks
    };
  }

toggleCompleted = todoId => {
  console.log("app.js toggleCompleted", todoId);
  this.setState({
    tasks: this.state.tasks.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    })
  });
};

addTodo = todoName => {
  this.setState({
    tasks: [
      ...this.state.tasks,
      {
        task: todoName,
        id: Math.random(),
        completed: false
      }
    ]
  });
};

clearCompleted = () => {
    console.log("app.js clear completed");
    this.setState({
      tasks: this.state.tasks.filter(todo => {
        return !todo.completed;
      })
    });
};





  render() {
    return (
      <div className="App">
        <div className="Title">
        <h2>Today's Task List</h2>
      </div>
      <div className="TForm">
        <TodoForm addTodo={this.addTodo} />
      </div>
      <div className="List">
      <TodoList 
        tasks={this.state.tasks}
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted}
        />
      </div>   
      </div>
    );
  }
}

export default App;
