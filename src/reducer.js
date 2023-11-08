export const initialUserState = {
  username: '',
  isLoggedIn: false,
};
export const initialTodoState = {
  todos: [],
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
  console.log('Inside todoReducer'); 
  switch (action.type) {
    case 'CREATE_TODO':
      console.log('Create_TODO case is executed'); 
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
        if (todo.title === action.title) {
          
          return { ...todo,
		  complete: !todo.complete,
		  dateCompleted: !todo.complete ? Date.now() : null,
		  };
        }
        return todo;
      });
   
      case 'DELETE_TODO':
        const updatedTodos = state.todos.filter((todo) => todo.title !== action.title);

        return {
          ...state,
          todos: updatedTodos,
        };

        /*console.log('DELETE_TODO case is executed'); 
        console.log('Before deletion - state:', state); // 输出删除前的状态
        const newState = state.filter((todo) => todo.title !== action.title);
        console.log('After deletion - newState:', newState);
        return newState; // 返回删除后的新状态*/
      
    default:
    return state;
  }
}


// Define appReducer that nests userReducer and todoReducer
export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    todos: todoReducer(state.todos, action),
    
  };


}
