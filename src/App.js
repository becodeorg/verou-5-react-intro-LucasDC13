import Header from "./components/Header.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";
import './App.css';

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