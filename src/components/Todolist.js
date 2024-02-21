import React, { useState } from "react";

const TodoList = () => {
  
  const initialTodos = [
    ["My first todo", 1], 
    ["My second todo", 0], 
    ["My third todo", 1], 
    ["My fourth todo", 0]
  ];

  const [todos, setTodos] = useState(initialTodos);

  // Function to handle checkbox change
  const handleCheckboxChange = (index) => {
    const newTodos = [...todos];
    newTodos[index][1] = newTodos[index][1] === 1 ? 0 : 1;
    setTodos(newTodos);
  };

  return ( 
      <div className="TodoList">
        <h2>Todos</h2>
        <ul>
          { todos.map((todo, index) => (
            <li key={ "todo_" + index } id={ "todo_" + index }>
              <input 
                type="checkbox" 
                checked={ todo[1] === 1 } 
                onChange={ () => handleCheckboxChange(index) }
              /> 
              { todo[0] }
            </li>
          ))}
        </ul>
      </div>
  );
 };

 export default TodoList;