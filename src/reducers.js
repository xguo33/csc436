import { v4 as uuidv4 } from 'uuid';

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
}

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      const newTodo = {
        id: uuidv4(),
        title: action.title,
        description: action.description,
        author: action.author,
        dateCreated: action.dateCreated,
        complete: false,
        dateCompleted: null,
      };
      return [newTodo, ...state];
    case "TOGGLE_TODO":
      return state.map(todo => {
      if (todo.id === action.id) {

        return { ...todo,
         complete: !todo.complete,
         dateCompleted: !todo.complete ? Date.now() : null,
    };
      }
      return todo;
    });

    case 'DELETE_TODO':
      const updatedTodos = state.filter((todo) => todo.id !== action.id);
          return updatedTodos;
    
    
      default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    todos: todoReducer(state.todos, action),
  };
}
