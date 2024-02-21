import Header from "./components/Header.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";
import './App.css';

const App = () => {
  return (
    <>
      <header className="App-header">
        < Header />
      </header>
      <main>
        <div className="Todo-form">
          < TodoForm />
        </div>
        <hr></hr>
        <div className="Todo-list">
          < TodoList />
        </div>
      </main>
    </>
    
  );
}

export default App;