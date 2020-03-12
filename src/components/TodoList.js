import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.tasks.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    toggleCompleted={props.toggleCompleted}
            />
            ))}
            <button className="clear" onclick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;
