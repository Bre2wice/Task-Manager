import React from "react";
import type { Task } from "../types/Task";
import { Link } from "react-router-dom";

interface Props {
  task: Task;
}

const TaskCard: React.FC<Props> = ({ task }) => (
  <div style={{ border: "1px solid gray", padding: "1rem", margin: "1rem 0" }}>
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <p>Due: {task.dueDate}</p>
    <p>Status: {task.completed ? "Completed" : "Incomplete"}</p>
    <Link to={`/tasks/${task.id}`}>View / Edit</Link>
  </div>
);

export default TaskCard;
