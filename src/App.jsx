import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { tasks as data } from "./task";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitile) {
    setTasks([...tasks,  {
      title: taskTitile,
      id: tasks.length,
      description: "algo nuevo",

  }]);
  }
  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
