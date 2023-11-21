import { useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import {useResource} from "react-request-hook";
import { StateContext } from "./contexts";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 
  const {state, dispatch} = useContext(StateContext);
  const {user} = state;

  const [todo, createTodo] = useResource (({
    id,
    title,
    description,
    author,
    dateCreated,
    complete,
    dateCompleted})=>({
      url:"/todos",
      method:"post",
      data : { id,
        title,
        description,
        author,
        dateCreated,
        complete,
        dateCompleted}
    }));




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
      createTodo(newTodo);
      dispatch({type: "CREATE_TODO", ...newTodo});

      //handleAddTodo(newTodo);


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
