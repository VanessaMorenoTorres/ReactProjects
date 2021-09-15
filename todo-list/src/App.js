import React, { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [task, setTask] = useState([
    {
      listItem: "Laundry",
      completed: false,
    },
    {
      listItem: "Wash Dishes",
      completed: false,
    },
    {
      listItem: "Get Groceries",
      completed: false,
    },
  ]);

  const addItemRef = useRef();

  useEffect(() => {
    addItemRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formInput = {
      listItem: addItemRef.current.value,
      completed: false,
    };
    setTask(task.concat(formInput));
    e.target.reset();
  };

  const deletetask = (id) => {
    setTask(task.filter((i, index) => index !== id));
  };

  return (
    <div id="App">
      <div>
        <h1>To-Do List:</h1>
        <p>
          Enter tasks below to add to your To-Do list. Once you have completed a
          task, click the "Remove" button to erase it from your list.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            id="addItem"
            ref={addItemRef}
            type="text"
            placeholder="enter task here"
            required
          />
          <button>Add to List</button>
        </form>
      </div>
      <div>
        {task.map((list, index) =>
          list.completed === false ? (
            <ul key={index}>
              <li>
                {list.listItem + "  "}
                <button className="delete" onClick={() => deletetask(index)}>
                  Remove
                </button>
              </li>
            </ul>
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;