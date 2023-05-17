import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <div className="todo">
        <Form todoList={todoList} setTodoList={setTodoList} />
        <br />
        <List todoList={todoList} />
      </div>
    </div>
  );
};

export default App;
