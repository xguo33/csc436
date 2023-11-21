import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useResource } from "react-request-hook";
import { StateContext } from "./contexts";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  const [todo, createTodo] = useResource(({
    id,
    title,
    description,
    author,
    dateCreated,
    complete,
    dateCompleted
  }) => ({
    url: "/todos",
    method: "post",
    headers: { Authorization: `${state.user.access_token}` },
    data: {
      id,
      title,
      description,
      author,
      dateCreated,
      complete,
      dateCompleted
    }
  }));

  function handleTitle(evt) {
    setTitle(evt.target.value);
  }

  function handleDescription(evt) {
    setDescription(evt.target.value);
  }

  useEffect(() => {
    if (todo.isLoading === false && todo.data) {
      dispatch({
        type: "CREATE_TODO",
        title: todo.data.title,
        content: todo.data.description,
        id: todo.data.id,
        author: user.username,
        dateCreated: todo.data.dateCreated,
        dateCompleted: todo.data.dateCompleted,
        complete: todo.data.complete,
      });
    }
  }, [todo]);

  function handleCreate() {
    if (title.trim()) {
      const newTodo = {
        id: uuidv4(),
        title,
        description,
        author: user,
        dateCreated: Date.now(),
        complete: false,
        dateCompleted: null,
      };
      createTodo(newTodo);
    } else {
      alert('Please enter title');
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
