import React, { useState } from "react";

export default function Form(props) {

  const [state, setState] = useState({
    coins: '',
    username: '',
    console: 'PlayStation',
    game: 'NBA 2K',
  });

  function handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(state.coins, state.username, state.console, state.game)
    setState({
      coins: '',
      username: '',
      console: state.console,
      game: state.game
    });
  }


  return (
    <form onSubmit={handleSubmit}>

      <div class="rowLine">

        <label>
          Console:
            <select onChange={(e) => setState({ ...state, console: e.target.value })}>
            <option value="PlayStation">PlayStation</option>
            <option value="XBox">XBox</option>
          </select>
        </label>

        <label>
          Game:
            <select onChange={(e) => setState({ ...state, game: e.target.value })}>
            <option value="NBA 2K">NBA 2K</option>
            <option value="Madden NFL">Madden</option>
          </select>
        </label>

        <label>
          Coin amount:
          <input
            type="number"
            id="new-coin-input"
            className="input input__lg"
            name="coins"
            value={state.coins}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>

        <label>
          Customer username:
        <input
            type="text"
            id="new-name-input"
            className="input input__lg"
            name="username"
            autoComplete="off"
            value={state.username}
            onChange={handleChange}
          />
        </label>

      </div>
      <button type="submit" className="btn btn__primary btn__lg">
        Add Order
        </button>
    </form>
  );
}

