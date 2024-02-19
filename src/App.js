import Header from "./components/Header.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";
import './App.css';

function App() {
  return (
    <div className="">
      < Header />
      <main>
        < TodoForm />
        <hr></hr>
        < TodoList />
      </main>
    </div>
    
  );
}

export default App;
