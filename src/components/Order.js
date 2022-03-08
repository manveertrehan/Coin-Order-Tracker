import React from "react";

export default function Order(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor="todo-0">
          Order Pending
            </label>
      </div>

      <div class="rowLine">

        <div>
          <label htmlFor="new-todo-input" className="label__lg">
            Customer Username: {props.username}
          </label>
        </div>

        <div>
          <label htmlFor="new-todo-input" className="label__lg">
            Coin Amount: {props.coins}
          </label>
        </div>

      </div>

      <div class="rowLine">

        <div>

          <label htmlFor="new-todo-input" className="label__lg">
            Console: {props.console}
          </label>
        </div>

        <div>
          <label htmlFor="new-todo-input" className="label__lg">
            Game: {props.game}
          </label>
        </div>

      </div>

      <div className="btn-group">
        <button type="button" className="btn btn__danger" onClick={() => props.deleteTask(props.id)}>
          Order Completed <span className="visually-hidden">{props.username}</span>
        </button>
      </div>
    </li>
  );
}
