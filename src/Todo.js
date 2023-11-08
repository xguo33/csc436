
export default function Todo({
  title,
  description,
  author,
  dateCreated,
  complete,
  dateCompleted,
  onToggleComplete,
  onDeleteTodo
}) {
  if (!title) {
    return null;
  }
  
  /*const handleToggleComplete =() => {
	  onToggleComplete();
  }
  
    const handleDeleteTodo =() => {
	  onDeleteTodo();
  }*/
  
  /*
  const handleToggleComplete = () => {
    const updatedComplete = !complete;
    const updatedDateCompleted = updatedComplete ? Date.now() : null;

    onToggleComplete(updatedComplete,updatedDateCompleted);
  };


  return (
    <div>
      <h3>{title}</h3>
      <div>{description}</div>
      <br />
      <i>Written by <b>{author}</b></i>
      <p>Created: {new Date(dateCreated).toLocaleString()}</p>
      <label htmlFor="completed-date"> Completed </label>
      <input
        type="checkbox"
        checked={complete}
        onChange={handleToggleComplete}
      />
      {complete && (
        <i>{new Date(dateCompleted).toLocaleString()}</i>
      )}
      <p><button>Delete</button></p>
    </div>
  );*/
  return (
    <div>
      <h3>{title}</h3>
      <div>{description}</div>
      <br />
      <i>Written by <b>{author}</b></i>
      <p>Created: {new Date(dateCreated).toLocaleString()}</p>
      <label htmlFor="completed-date"> Completed </label>
      <input
        type="checkbox"
        checked={complete}
        onChange={onToggleComplete}
      />
      {complete && (
        <i>{new Date(dateCompleted).toLocaleString()}</i>
      )}
    <button onClick={onDeleteTodo}>Delete</button>

    </div>
  );
  
}