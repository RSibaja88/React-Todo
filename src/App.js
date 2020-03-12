import React from 'react';
import TodoList from './components/TodoList';


const stockTasks = [
  {
    task: 'Shower',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Get Dressed',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Eat Breakfast',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Brush Teeth',
    id: Date.now(),
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

addTask = taskName => {
  this.setState({
    tasks: [
      ...this.state.tasks,
      {
        task: taskName,
        id: Date.now(),
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
