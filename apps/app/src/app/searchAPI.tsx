import React, { useEffect, useState } from "react";

interface Todo{
    title: string;
}

export const searchAPI = () => {
    const [todos, setTodos] = useState<Todo[]>([
        {title: "Todo1"},
        {title: "Todo2"},
    ]);
    useEffect(() => {
        fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g&cx=017576662512468239146:omuauf_lfve&q=poland')
        .then((_) => _.json())
        .then(setTodos);
    }, []);
    
    function addTodo(){
        fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g&cx=017576662512468239146:omuauf_lfve&q=poland',{
            method: 'POST',
            body: '',
        })
        .then((_) => _.json())
        .then((newTodo) => {
            setTodos([...todos, newTodo]);
        });
    }
    return(
        <>
            <h1>Todos</h1>
            <ul>
                {todos.map((t) => (
                    <li className={'todo'}>{t.title}</li>
                ))}
            </ul>
            <button id={'add-todo'} onClick={addTodo}>
                Add Todo
            </button>
        </>
    );
  };
  
  export default searchAPI;
  // AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g key
  // https://www.googleapis.com/customsearch/v1?key=AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g&cx=017576662512468239146:omuauf_lfve&q=poland

  