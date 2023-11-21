import './App.css';
import { useReducer, useEffect } from "react";
import CreateTodo from "./CreateTodo";
import UserBar from "./Userbar";
import TodoList from "./TodoList";
import { StateContext } from "./contexts";
import appReducer from "./reducers";
import { useResource } from 'react-request-hook';



function App() {
 /*  const initialTodos = [
    {
      title: "Lunch",
      description: "The greatest thing since sliced bread!",
      author: "Daniel Bugl",
      dateCreated: Date.now(),
      complete: false,
      dateCompleted:null,

    },
    {
      title: "Play",
      description: "Play at playground!",
      author: "Daniel Bugl",
      dateCreated: Date.now(),
      complete: true,
      dateCompleted:Date.now(),
    }
  
  ]; */

  const [todoResponse, getTodos] = useResource(()=>({
    url: "/todos",
    method:"get",
  }));

  useEffect(getTodos, []);

  useEffect(() => {
    if (todoResponse && todoResponse.data) {
      dispatch({ type: "FETCH_TODOS", todos: todoResponse.data.reverse() });
    }
  }, [todoResponse]);



  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: [],
  });

  const { user, todos } = state;


  useEffect(() => {
    if (user) {
      document.title = `${user}’s Todo`;
    } else {
      document.title = "Todo";
    }
  }, [user]);

  //const handleAddTodo = (newTodo) => {
  //  dispatch({ type: "CREATE_TODO", ...newTodo });
  //};



  return (
      <div className="Todo app">
      <h1>Lab4 {user}'s Todo React App</h1>
      <StateContext.Provider value={{ state, dispatch }}> 
   
          <UserBar />
    
      <div className='todo'>
          <CreateTodo />
          <TodoList todos={todos} />
      </div>   
      </StateContext.Provider>
    </div>
  );
}

export default App;
