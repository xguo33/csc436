


export default function Todo({
  id,
  title,
  description,
  author,
  dateCreated,
  complete,
  dateCompleted,
  onToggleComplete,
  onDeleteTodo}) {

  return (
    <div>
      <h3>{title}</h3>
      <div>{description}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
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
    <button onClick={()=> onDeleteTodo()}>Delete</button>

    </div>
  );
}
