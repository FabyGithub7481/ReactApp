import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task, eliminarTarea }) {
 const valor= useContext(TaskContext);
 console.log(valor);
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => eliminarTarea(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
