"use client";
import { useState, useEffect } from "react";

export default function TaskManager() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState("");

    // Load tasks from localStorage on component mount
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        setTasks(savedTasks);
    }, []);

    // Save tasks to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const deleteTask = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold">Task Manager</h2>
            <div className="flex gap-2 mt-2">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter task..."
                    className="border p-2 rounded w-full"
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul className="mt-4">
                {tasks.map((task, index) => (
                    <li key={index} className="task">
                        {task}
                        <button onClick={() => deleteTask(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
