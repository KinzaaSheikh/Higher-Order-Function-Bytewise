import { useEffect, useState } from "react"

const TodoList = () => {
  const [todo, setTodo] = useState([])
    const [term, setTerm] = useState("")

    useEffect(() => {
        const fetchTodos = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos")
            const json = await res.json()
            setTodo(json)
            console.log(json);
        }
        fetchTodos()
    }, [])

    // let renderUsers = users.map((user) => {
    //     return (
    //         <div key={user.id}>
    //             <p>
    //                 <strong>{user.name}</strong>
    //             </p>
    //         </div>
    //     )
    // })

    let filteredTodos = todo.filter(({ title }) => {
        return title.indexOf(term) >= 0
    }).slice(0, 10)
    .map((todo) => {
        return (
            <div key={todo.id}>
                <p>
                    <strong>{todo.title}</strong>
                </p>
            </div>
        )
    })

    return (
        <>
            <div>
                <input 
                type="text" 
                value={term} 
                onChange={ (e) => setTerm(e.target.value)}/>
            </div>
            <div>
                {filteredTodos}
            </div>
        </>
    )
}

export default TodoList;
