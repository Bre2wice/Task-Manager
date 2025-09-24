import React, { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

const TaskDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return <div>Error: TaskContext not found</div>;
  }

  const { tasks, deleteTask } = taskContext;
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return <div>Task not found</div>;
  }

  const handleDelete = () => {
    deleteTask(task.id);
    navigate("/");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Status: {task.completed ? "Completed" : "Incomplete"}</p>

      <button onClick={handleDelete}>Delete Task</button>
      <Link to={`/edit/${task.id}`} style={{ marginLeft: "1rem" }}>
        Edit Task
      </Link>
    </div>
  );
};

export default TaskDetails;
