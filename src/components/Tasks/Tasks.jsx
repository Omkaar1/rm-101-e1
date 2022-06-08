import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        <Task />
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        <h1>List</h1>
        <p>Add a new task</p>
      </div>
    </>
  );
};

export default Tasks;
