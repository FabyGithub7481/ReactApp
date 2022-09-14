import { createContext } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    let x=20
  return (
    <TaskContext.Provider value={x}>
    {props.children}
    </TaskContext.Provider>
    )
}

/* function TaskContext(props) {
  return (
    <>
      <h1>Component Context</h1>
      {props.children}
    </TaskContext.provider>
  );
} */
