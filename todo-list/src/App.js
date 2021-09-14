import React, { useState, useRef } from "react";

import "./App.css";

function App() {
  const [task, setTask] = useState("");

  const [tasklist, setTaskList] = useState([
    {
      listItem: "Laundry ",
      completed: false,
    },
    {
      listItem: "Wash Dishes ",
      completed: false,
    },
    {
      listItem: "Get Groceries ",
      completed: false,
    },
  ]);
  // check this usestate above, should not call task?

  const AddItemRef = useRef()

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        listItem: AddItemRef.current.value,
        completed: false,
      }
      // setTaskList([...tasklist, taskDetails])
      setTaskList(tasklist.concat(task))
    }
  };

  // console.log("tasklist", tasklist);

  const deletetask = (e, listItem) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.listItem !== listItem));
  };

  // const taskCompleted = (e, listItem) => {
  //   e.preventDefault();
  //   const element = tasklist.findIndex((elem) => elem.listItem == listItem);
  //   const newTaskList = [...tasklist];
  //   const newTaskList[element] = {
  //     ...newTaskList[element],
  //     completed: true,
  //   }
  //   setTaskList(newTaskList);
  // }

  return (
    <div className="App">
      <h1 className="title">To Do</h1>
      <form className="addItemsForm">
        <input
          type="text"
          name="text"
          placeholder="Type additional tasks here"
          ref={AddItemRef}
          onChange={(e) => handleChange(e)}
        ></input>
        <button className="addBtn" type="submit" onClick={AddTask}>
          Add Item
        </button>
      </form>
      <br />
      {tasklist !== [] ? (
        <ul>
          {tasklist.map((t) => (
            <li className={t.completed ? "crossText" : "listItem"} >
              {t.listItem }
              {/* <button className="completed" onClick={(e) => taskCompleted(e, t.listItem)}>
                Completed
              </button> */}
              <button
                className="delete"
                onClick={(e) => deletetask(e, t.listItem)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default App;
