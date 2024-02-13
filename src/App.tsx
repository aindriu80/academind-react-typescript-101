import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the couse" }];
  return (
    <div className="App">
      {/* A component that adds todos */}
      <h3>academind-react-typescript-101</h3>
      <TodoList items={todos} />
    </div>
  );
};

export default App;
