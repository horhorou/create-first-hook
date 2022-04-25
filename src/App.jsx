import { useEffect, useState } from 'react'
import './App.css'
import useTodos from './hooks/useTodos'

// Inside the component

// function App() {
//   const [todos, setTodos] = useState(null)

//   useEffect(() => {
//     const fetchTodos = async () => {
//       try {
//         const response = await fetch(
//           'https://jsonplaceholder.typicode.com/todos/',
//         )
//         const data = await response.json()
//         setTodos(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     fetchTodos()
//   }, [])

//   return (
//     <>
//       <main className="main">
//         <h1>Todos</h1>
//         <div className="todos-container">
//           <ul>
//             {todos &&
//               todos.map((todo) => (
//                 <li key={todo.id}>
//                   <span
//                     style={{ textDecoration: todo.completed && 'line-through' }}
//                   >
//                     {todo.title}
//                   </span>
//                 </li>
//               ))}
//           </ul>
//         </div>
//       </main>
//       <footer>
//         <strong>01</strong>
//         <strong>Create your first custom hook with React</strong>
//         <span className="muted-text">@horhorou</span>
//       </footer>
//     </>
//   )
// }

// With our custom hook

function App() {
  const todos = useTodos()

  return (
    <>
      <main className="main">
        <h1>Todos</h1>
        <div className="todos-container">
          <ul>
            {todos &&
              todos.map((todo) => (
                <li key={todo.id}>
                  <span
                    style={{ textDecoration: todo.completed && 'line-through' }}
                  >
                    {todo.title}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </main>
      <footer>
        <strong>01</strong>
        <strong>Create your first custom hook with React</strong>
        <span className="muted-text">@horhorou</span>
      </footer>
    </>
  )
}

export default App
