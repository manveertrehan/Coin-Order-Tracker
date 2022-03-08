import { nanoid } from "nanoid";
import Order from "./components/Order";
import Form from "./components/Form";
import React, { useState } from "react";
import "./index.css";

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  function addTask(coins, username, console, game) {
    const newTask = { id: "todo-" + nanoid(), username: username, completed: false, coins: coins, console: console, game: game };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }


  const taskList = tasks.map(task => (
    <Order
      id={task.id}
      username={task.username}
      completed={task.completed}
      coins={task.coins}
      console={task.console}
      game={task.game}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  )
  );

  const tasksNoun = taskList.length !== 1 ? 'orders' : 'order';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;


  return (
    <div className="todoapp stack-large">
      <div className="stack-large">
      <a href="https://twitter.com/pandaspicytre2k">
        <img src={require('.//images/pandalogo.png')} className="img" alt="" />
      </a>
      </div>
      <h1>Order Tracker</h1>
      <Form addTask={addTask} />
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
