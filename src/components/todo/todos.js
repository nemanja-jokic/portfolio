import React from "react";
import Button from "../button.js";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
          {
            <Button
              tone="todo-button"
              id={"X"}
              onClick={() => {
                deleteTodo(todo.id);
              }}
            />
          }
        </div>
      );
    })
  ) : (
    <p>You have no todo's left </p>
  );
  return <div className="todos collection">{todoList}</div>;
};
export default Todos;
