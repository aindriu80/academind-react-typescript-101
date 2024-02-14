import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the couse" }];
  return (
    <div className="App">
      <h3>academind-react-typescript-101</h3>
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
