import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import type { Task } from "../types/Task";

const EditTask: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return <div>Error: TaskContext not found</div>;
  }

  const { tasks, updateTask } = taskContext;
  const taskToEdit = tasks.find((t) => t.id === id);

  if (!taskToEdit) {
    return <div>Task not found</div>;
  }

  const handleSubmit = (updatedTask: Omit<Task, "id">) => {
    updateTask({ ...taskToEdit, ...updatedTask });
    navigate("/");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Edit Task</h2>
      <TaskForm initialTask={taskToEdit} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditTask;
