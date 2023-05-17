import React, { useState } from "react";

const Form = ({ todoList, setTodoList }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTask = () => {
    if (todo !== "") {
      const taskDetails = {
        value: todo,
      };

      setTodoList([...todoList, taskDetails]);
      setTodo("");
    }
  };
  return (
    <>
      <h1>Create To-do</h1>
      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handleChange(e)}
        placeholder="Add todo here..."
      />

      <button className="add-btn" onClick={addTask}>
        Add
      </button>
    </>
  );
};

export default Form;
