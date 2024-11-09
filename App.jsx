/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (!taskText.trim() || tasks.includes(taskText.trim())) {
      return false;
    }
    setTasks([...tasks, taskText.trim()]);
    return true;
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>My Todo List</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ToDoForm addTask={addTask} />
            <ToDoList tasks={tasks} removeTask={removeTask} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;
