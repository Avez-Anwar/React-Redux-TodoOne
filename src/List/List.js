import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions/Actions";
import todos from "../Reducers/Reducer";

function List(props) {
  return (
    <div>
      <p>
        {props.TodoReducer.map(function (todo) {
          return (
            <p key={todo.id}>
              {todo.message}

              <button onClick={() => props.dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
            </p>
          );
        })}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    TodoReducer: state.TodoReducer.data,
  };
};

export default connect(mapStateToProps)(List);
