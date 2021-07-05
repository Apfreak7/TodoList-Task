import React,{useState} from 'react'
import TodoItem from "./TodoItem";
import Todosdata from "./TodosData";

export default function TodoList() {
    const [todos,setTodos] = useState(Todosdata)

    const handleChange = (id) => {
        const _todos = [...todos];
        const index = _todos.findIndex((e) => e.id === id);
        _todos.splice(index,1,{
            ..._todos[index],
            completed: !todos.completed
        })
        setTodos(_todos);
    }
    const todoItems = todos.map(item => <TodoItem key={item.id} item={item} handleChange={handleChange}/>)
    return (
            <div className="App">
                {todoItems}
            </div>
    )
}
