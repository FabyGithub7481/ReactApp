function TaskCard({ task , eliminarTarea}) {
  function mostrarAlerta(params) {
    alert(task.id);
  }
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={()=> eliminarTarea(task.id)} >Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
