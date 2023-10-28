import React, {useState} from "react";

export default function CreateTodo ({user, todos, setTodos}) {


  const [title, setTitle] = useState ('');
    const [description, setDescription] = useState('');

    const handleCreateTodo = 
    () =>{
        if (title){
            const newTodo ={
                title,
                description,
                author: user,
                dateCreated: Date.now(),
                complete: false,
                dateCompleted:null,

            };

            setTodos([...todos,newTodo]);
            setTitle('');
            setDescription('');


        }else{
            alert ('Please enter title')
        }

    }
    
    return (
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>Author: <b>{user}</b></div>
            <div>
              <label htmlFor="create-title">Title:</label>
              <input
                type="text"
                name="create-title"
                id="create-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="create-description">Description:</label>
              <textarea
                name="create-description"
                id="create-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <input type="submit" value="Create" onClick={handleCreateTodo} />
          </form>
        </div>
      );
    }