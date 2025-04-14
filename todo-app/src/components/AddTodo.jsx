import React from 'react'

const AddTodo = () => {
  return (
    <div className="d-flex justify-content-between gap-1">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter Todo here" aria-label="Todo" />
      </div>
      <div className="input-group mb-3">
        <input type="date" className="form-control" placeholder="Enter date" aria-label="date" />
        <span className="input-group-text bg-success text-white" id="basic-addon2"><i className="fa-solid fa-plus"></i></span>
      </div>
    </div>
  )
}

export default AddTodo