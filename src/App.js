import Header from "./components/Header.js";
// import TodoForm from "./components/TodoForm.js";
// import TodoList from "./components/TodoList.js";
import './App.css';
import React, { useRef } from "react"; 
import { useState } from "react";

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

const TodoForm = () => {
  const inputRef = useRef();

  // Function to submit the form
  function submitForm() {
      // Select the input element (perhaps simplify to "inputRef.current.value")
      const inputRefValue = inputRef.current.value;
      // Log its value
      console.log( inputRefValue );
  }

  // Function for keyup "Enter", linking to the above function
  function handleKeyUp(e) { 
      if (e.key === 'Enter') submitForm(); 
  }

  return ( 
      <section className="TodoForm">  
      {/* Maybe no form ele */}
          <input 
              type="text" 
              className="TodoInput" 
              placeholder="Add new todos here"
              // Give the input field a ref
              ref={ inputRef }
              onKeyUp={ handleKeyUp }>
          </input>
          <input 
              type="submit" 
              value="Add Noot" 
              className="TodoInput"
              onClick={ submitForm }>
          </input>
      </section>
  );
};

const App = () => {
  return (
    <>
        < Header />
      <main>
          < TodoForm />
        <hr></hr>
          < TodoList />
      </main>
    </>
    
  );
}

export default App;

