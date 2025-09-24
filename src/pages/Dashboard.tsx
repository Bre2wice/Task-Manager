import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

const Dashboard: React.FC = () => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return <div>Error: TaskContext not found</div>;
  }

  const { tasks } = taskContext;

  return (
    <div className="main-container">
      <h2>Task Dashboard</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet. Create one!</p>
      ) : (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      )}
    </div>
  );
};

export default Dashboard;
