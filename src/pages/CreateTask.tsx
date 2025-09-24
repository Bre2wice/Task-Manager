import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import { useNavigate } from "react-router-dom";
import type { Task } from "../types/Task";

const CreateTask: React.FC = () => {
  const taskContext = useContext(TaskContext);
  const navigate = useNavigate();

  if (!taskContext) {
    return <div>Error: TaskContext not found</div>;
  }

  const { addTask } = taskContext;

  const handleSubmit = (task: Omit<Task, "id">) => {
    addTask(task);
    navigate("/");
  };

  return (
    <div className="form-container" style={{ padding: "1rem" }}>
      <h2>Create Task</h2>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateTask;
