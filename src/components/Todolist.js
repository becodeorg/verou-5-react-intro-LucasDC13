import React, { useState } from "react";

const Todolist = () => {
  
  const initialTodos = [
    ["My first todo", 1], 
    ["My second todo", 0], 
    ["My third todo", 1], 
    ["My fourth todo", 0]
  ];

  const [todos, setTodos] = useState(initialTodos);

  return ( 
    <>
      <div className="Todo-list">
        <h2>Todos</h2>
        <ul>
          {todos.map((todo) => (
            <li>
              <input type="checkbox" checked={todo[1] === 1} /> {todo[0]}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
 };

 export default Todolist;