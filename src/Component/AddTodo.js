import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/Actions";

function AddTodo(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    let input = event.target.userInput.value;
    props.dispatch(addTodo(input));
    event.target.userInput.value = " ";
    console.log(input);
  };

  return (
    <div>
      <form type="sumbit" onSubmit={handleSubmit}>
        <input type="text" name="userInput" />
        <button>Sumbit</button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);
