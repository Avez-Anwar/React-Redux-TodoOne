import { Provider } from "react-redux";
import "./App.css";
import Counter from "./Component/Counter";
import store from "./store";
import AddTodo from "./Component/AddTodo";
import List from "./List/List";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo />
        <List />
      </div>
    </Provider>
  );
}

export default App;
