import React, { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [task, setTask] = useState([
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
  };
  // const handleChange = (e) => {
  //   setTask(e.target.value);
  // };

  // const AddTask = () => {
  //   if (task !== "") {
  //     const taskDetails = {
  //       listItem: AddItemRef.current.value,
  //       completed: false,
  //     }
  //     // setTaskList([...tasklist, taskDetails])
  //     setTaskList(tasklist.concat(task))
  //   }
  // };

  // console.log("tasklist", tasklist);

  const deletetask = (id) => {
    console.log(id)
    setTask(task.filter((i, index) => index !== id));

  };

  return (
    <div id="App">
      <div>
        <h1>To Do</h1>
        <form onSubmit={handleSubmit}>
          <input id="addItem" ref={addItemRef} type="text" />
          <button>Add to List</button>
        </form>
      </div>
      <div>
        {task.map((list, index) =>
          list.completed === false ? (
            <ul key={index}>
              <li>
                {list.listItem}
                {/* {list.addItem} */}
                <button className="delete"
                  onClick={() => deletetask(index)}>

                  Delete
                </button>
              </li>
            </ul>
          ) : null
        )}
      </div>
    </div>
  );
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

  // return (
  //   <div className="App">
  //     <h1 className="title">To Do</h1>
  //     <form className="addItemsForm" onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         name="text"
  //         placeholder="Type additional tasks here"
  //         ref={addItemRef}
  //         onChange={(e) => handleChange(e)}
  //       ></input>
  //       <button className="addBtn" type="submit" onClick={AddTask}>
  //         Add Item
  //       </button>
  //     </form>
  //     <br />
  //     {tasklist !== [] ? (
  //       <ul>
  //         {tasklist.map((t) => (
  //           <li className={t.completed ? "crossText" : "listItem"} >
  //             {t.listItem }
  //             {/* <button className="completed" onClick={(e) => taskCompleted(e, t.listItem)}>
  //               Completed
  //             </button> */}
  //             <button
  //               className="delete"
  //               onClick={(e) => deletetask(e, t.listItem)}
  //             >
  //               Delete
  //             </button>
  //           </li>
  //         ))}
  //       </ul>
  //     ) : null}
  //   </div>
  // );
}

export default App;
