import { useState } from "react";
import TodoItem from "./TodoItem";

function App() { 

  const [tasks, settasks] = useState([]);
  const [taskTitle, settasktitle] = useState('');

  const addTask = () => {
    const newTas = [...tasks,{
      title: taskTitle,
      done: false
    }]
    newTas.push(taskTitle)
    settasks(newTas)
    settasktitle('')
  }
  return (
    <div>
      <div className="bg-indigo-600 text-white p-4">
        Todo App
      </div>
      <div className="p-4 border m-4 border-slate-300 rounded">
        <input value={taskTitle} onChange={(e) => settasktitle(e.target.value)} type="text" placeholder="Task Name" className="px-4 py-2 border w-full block mb-4 border-slate-300 rounded" />
        <button onClick={addTask} className="block bg-green-100 w-full p-2 text-green-700 uppercase font-bold cursor-pointer hover:bg-green-700 hover:text-white transition-all rounded">Add</button>
      </div>
      <div className="p-4 border m-4 border-slate-300 rounded">
        {tasks.map( item => <TodoItem item ={item} />)}
      </div>
    </div>
  );
}
export default App;
