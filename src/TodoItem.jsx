import React, { useState } from 'react'

const TodoItem = ({ item, itemRemover }) => {
  const [done, setDone] = useState(false);

  return (
    <div className="bg-slate-200 rounded p-4 cursor-pointer hover:bg-slate-100 transition-all flex items-center mb-4">
      {!done ? <div className="flex-1">{item.title}</div> : <div className="flex-1 line-through" >{item.title}</div>}
      <div>
        {done && <button onClick={() => setDone(!done)} className="bg-red-600 hover:bg-red-400 text-white px-2 mr-2 rounded h-6">Undo</button>}
        {!done && <button onClick={() => setDone(!done)} className="bg-green-600 hover:bg-green-400 text-white px-2 mr-2 rounded h-6">Done</button>}
        {/* <button className="bg-red-600 hover:bg-red-400 text-white rounded-full w-6 h-6">&times;</button> */}
        <button onClick={() => itemRemover(item.id)} className="bg-red-600 hover:bg-red-400 text-white rounded-full w-6 h-6">&times;</button>
      </div>
    </div>
  )
}

export default TodoItem