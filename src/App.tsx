import React, { useState, useEffect,  } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Todo {
  id: number;
  text: string;
  completed: boolean
}

const TodoApp: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() =>{
    const savedTodos = localStorage.getItem("todos");
  if (savedTodos) { 
    setTodos(JSON.parse(savedTodos));
  }
  }, []);

  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  // Dark mode toggle
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // Add todo
  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  // Toggle complete
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 
                    dark:from-gray-900 dark:to-gray-800 
                    flex items-center justify-center transition-colors duration-500">

      <div className="bg-white dark:bg-gray-900 text-black dark:text-white
                      w-full max-w-md rounded-2xl shadow-2xl p-6 transition-colors duration-500">

        {/* Dark Mode Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm corsor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <h1 className="text-5xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
          📝 Todo List
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Ku dar shaqo..."
            className="flex-1 px-4 py-2 border rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-indigo-400
                       dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400"
          />
          <button
            onClick={addTodo}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg  hover:bg-gray-400 transition "
          >
            Add  
          </button>
        </div>

        {/* Todos */}
        <ul className="space-y-2">
          <AnimatePresence>
            {todos.map((todo) => (
              <motion.li
                key={todo.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center justify-between p-3 rounded-lg 
                            ${todo.completed ? "bg-green-100 dark:bg-green-800" : "bg-gray-100 dark:bg-gray-800"}
                            transition-all duration-300 transform hover:scale-105`}
              >
                <span
                  onClick={() => toggleTodo(todo.id)}
                  className={`cursor-pointer flex-1 
                              ${todo.completed ? "line-through text-gray-500 dark:text-gray-400" : ""}`}
                >
                  {todo.text}
                </span>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {todos.length === 0 && (
          <p className="text-center text-gray-400 mt-6 dark:text-gray-400">
            Shaqo ma jirto 😴
          </p>
        )}

      </div>
    </div>
  );
};

export default TodoApp;
