import React from 'react'

const TodoItem = ({ todoItems }) => {
  return (
    <>
      <table className="table custom-table bordered table-striped table-hover mt-3 shadow-sm p-3 bg-body">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Todo Name</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todoItems.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.text}</td>
              <td>04/03/2024</td>
              <td><i className="fa-solid fa-trash-arrow-up text-danger"></i></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TodoItem