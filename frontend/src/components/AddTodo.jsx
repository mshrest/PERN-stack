import React, { useState } from "react";

const AddTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }
    return(
      <>
        <h1 className="text-center mt-5 bg-secondary text-white">ToDo List</h1>
        <form className="d-flex m-5" onSubmit={onSubmit}>
            <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
            <button className="btn btn-success ml-1">Add</button>
        </form>
      </>
    )
}
 
export default AddTodo;
