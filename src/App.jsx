import { useState } from "react";
import "./App.css";
import InputContainer from "./Components/InputContainer";
import TodoContainer from "./Components/TodoContainer";

function App() {
  const [inputValu, setInputValu] = useState("");
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputValu(e.target.value);
  }
  function addTodos() {
    if (inputValu != "") {
      setTodos((prevtodo) => [...prevtodo, inputValu]);
      setInputValu("");
    }
  }
  function delTodos(todoindex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoindex;
      })
    );
  }

  return (
    <>
      <main>
        <h1>To Do List</h1>
        <InputContainer
          inputValu={inputValu}
          writeTodo={writeTodo}
          addTodos={addTodos}
        />
        <TodoContainer todos={todos} delTodos={delTodos}/>
      </main>
    </>
  );
}

export default App;
