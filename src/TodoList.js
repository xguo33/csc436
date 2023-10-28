import Todo from './Todo'
import React from 'react';
export default function Todolist ({todos, setTodos}) {
    const handleToggleComplete = (index, updatedComplete, updatedDateCompleted) =>{
        const updatedTodos = [...todos];
        updatedTodos[index] = {
            ...updatedTodos[index],
            complete: updatedComplete,
            dateCompleted: updatedDateCompleted,
        };

        setTodos(updatedTodos);
    }

    return(
        <div>
            {
                todos.map((todo,index) => (
                    <Todo
                        key={`todo=${index}`}
                        {...todo}
                         onToggleComplete={(updatedComplete,updatedDateCompleted)=>
                            handleToggleComplete(index,updatedComplete,updatedDateCompleted) 
                         }
                />
                )
                )
            }
        </div>
    );



}
