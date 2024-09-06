import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  // Obtener tareas desde el backend
  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error al obtener las tareas:', error));
  }, []);

  // Agregar una nueva tarea
  const addTask = () => {
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => {
        if (response.ok) {
          setTasks([...tasks, { ...newTask, id: Date.now() }]);
          setNewTask({ title: '', description: '' });
        }
      })
      .catch((error) => console.error('Error al agregar la tarea:', error));
  };

  // Eliminar una tarea
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setTasks(tasks.filter((task) => task.id !== id));
        }
      })
      .catch((error) => console.error('Error al eliminar la tarea:', error));
  };

  return (
    <div className="app">
      <h1>Gestión de Tareas</h1>
      <input
        type="text"
        placeholder="Título de la tarea"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <textarea
        placeholder="Descripción de la tarea"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
      ></textarea>
      <button onClick={addTask}>Agregar Tarea</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;