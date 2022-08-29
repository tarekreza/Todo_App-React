import React from 'react'

const TodoItem = ({item}) => {
  return (     
  <div className="bg-slate-200 rounded p-4 cursor-pointer hover:bg-slate-100 transition-all flex items-center mb-4">
    <div className="flex-1">
      {item.title}
    </div>
    <div>
      <button className="bg-red-600 hover:bg-red-400 text-white rounded-full w-6 h-6">&times;</button>
    </div>
  </div>
  )
}

export default TodoItem