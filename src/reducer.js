export const initialUserState = {
    username: '',
    isLoggedIn: false,
  };
  
  // Define userReducer
    export function userReducer(state, action) {
      switch (action.type) {
        case "LOGIN":
        case "REGISTER":
          return {
            username: action.username,
            isLoggedIn: true,
          };
        case "LOGOUT":
          return {
            username: "",
            isLoggedIn: false,
          };
        default:
          return state;
      }
  
    }
   // Define todoReducer
   export function todoReducer(state, action) {
    switch (action.type) {
      case 'CREATE_TODO':
        const newTodo = {
          title: action.title,
          description: action.description,
          author: action.author,
          dateCreated: action.dateCreated,
          complete: false,
          dateCompleted: null,
        };
        return [newTodo, ...state];
      case 'TOGGLE_TODO':
        return state.map(todo => {
          if (todo.id === action.id) {
            // 找到匹配的待办事项，应用更新
            return { ...todo, ...action.updates };
          }
          return todo;
        });
      default:
        return state;
    }
  }
  
  
  // Define appReducer that nests userReducer and todoReducer
  export default function appReducer(state, action) {
    return {
      user: userReducer(state.user, action),
      todos: todoReducer(state.todos, action),
      // You can add other reducers here if needed
    };
  }
  