import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");

  // Add a new todo
  const addTodo = () => {
    if (!newTodo) {
      setError("Task cannot be empty");
      return;
    }
    setTodos([...todos, { text: newTodo, status: "Not Done" }]);
    setNewTodo("");
  };

  // Delete a todo
  const deleteTodo = (index) => {
    setTodos(todos.filter((_,data) => data !== index));
  };

  //  status (Done/Not Done)
  const Status = (index) => {
    setTodos(
      todos.map((todo, status) =>
        status === index ? { ...todo, status: todo.status === "Done" ? "Not Done" : "Done" } : todo
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 shadow-gray-600 rounded-lg flex gap-6">
      
      <div className="w-2/3 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3">Add New Task</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="text"
          className="w-full p-3 border rounded-lg shadow-sm mb-3"
          placeholder="Enter a new todo..."
          value={newTodo}
          onChange={(e) => { setNewTodo(e.target.value); if (Error) setError("");}}
        />
        <button
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>

      <div className="w-2/3 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3">Todo List</h2>
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Task</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{index + 1}</td>
                <td className={`p-3 ${todo.status === "Done" ? " text-gray-500" : ""}`}>{todo.text}</td>
                <td className="p-3">
                  <button
                    className={`px-3 py-1 rounded-lg ${todo.status === "Done" ? "bg-green-500" : "bg-yellow-500"} text-white`}
                    onClick={() => Status(index)}
                  >
                    {todo.status}
                  </button>
                </td>
                <td className="p-3">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                    onClick={() => deleteTodo(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoApp;
