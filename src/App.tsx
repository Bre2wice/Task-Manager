import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import TaskDetails from "./pages/TaskDetails";

const App: React.FC = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create" element={<CreateTask />} />
      <Route path="/edit/:id" element={<EditTask />} />
      <Route path="/tasks/:id" element={<TaskDetails />} />
    </Routes>
  </div>
);

export default App;
