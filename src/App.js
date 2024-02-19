import Header from "./components/Header.js";
import Todoform from "./components/Todoform.js";
import Todolist from "./components/Todolist.js";
import './App.css';

function App() {
  return (
    <div className="">
      < Header />
      <main>
        < Todoform />
        <hr></hr>
        < Todolist />
      </main>
    </div>
    
  );
}

export default App;
