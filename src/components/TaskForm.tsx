import React, { useState } from "react";
import type { Task } from "../types/Task";

interface Props {
  initialTask?: Task;
  onSubmit: (task: Omit<Task, "id">) => void;
}

const TaskForm: React.FC<Props> = ({ initialTask, onSubmit }) => {
  const [title, setTitle] = useState(initialTask?.title || "");
  const [description, setDescription] = useState(
    initialTask?.description || ""
  );
  const [dueDate, setDueDate] = useState(initialTask?.dueDate || "");
  const [completed, setCompleted] = useState(initialTask?.completed || false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !dueDate) return;
    onSubmit({ title, description, dueDate, completed });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Completed:</label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;
