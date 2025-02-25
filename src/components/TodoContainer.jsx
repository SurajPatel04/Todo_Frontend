import Todo from "./Todo";
import TodoCard from "./TodoCard";
import { useState } from "react";
function TodoContainer() {
  const [isVisible, setVisible] = useState(true);

  const handleAddTask = () => {
    setVisible((prev) => !prev);
  };

  const handleCancelTodo = () => {
    setVisible((prev) => !prev);
  };
  return (
    <>
      <Todo
        handleAddTask={handleAddTask}
        display={isVisible ? "block" : "none"}
      />
      <TodoCard
        handleCancelTodo={handleCancelTodo}
        display={isVisible ? "none" : "block"}
      />
    </>
  );
}

export default TodoContainer;
