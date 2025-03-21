import React, { useState } from 'react';

const UpdateTodo = ({todo}) => {
    const[description, setDescription] = useState(todo.description);

    const updateDescription = async(e) => {
        e.preventDefault();
        try {
          const body = { description };
          const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });

          window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <>
          <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>Edit</button>

          <div class="modal" id= {`id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
            <div class="modal-dialog">
              <div class="modal-content">

                <div class="modal-header">
                  <h4 class="modal-title">Edit Todo</h4>
                  <button type="button" class="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
                </div>

                <div class="modal-body">
                  <input type="text" className="form-control" value={description} onChange = {e => setDescription(e.target.value)}/>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={e => updateDescription(e)}>Update</button>
                  <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
                </div>

              </div>
            </div>
          </div>
        </>
    )
}

export default UpdateTodo;
