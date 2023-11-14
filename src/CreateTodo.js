import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function CreateTodo({ user, handleAddTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleTitle(evt) {
    setTitle(evt.target.value);
  }
  function handleDescription(evt) {
    setDescription(evt.target.value);
  }
  function handleCreate() {
    if (title){
      const newTodo ={
          id:uuidv4(),
          title,
          description,
          author: user,
          dateCreated: Date.now(),
          complete: false,
          dateCompleted:null,

      };

      handleAddTodo(newTodo);


  }else{
      alert ('Please enter title')
  }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          value={title}
          onChange={handleTitle}
          name="create-title"
          id="create-title"
        />
      </div>
      <textarea value={description} onChange={handleDescription} />
      <input type="submit" value="Create" />
    </form>
  );
}
