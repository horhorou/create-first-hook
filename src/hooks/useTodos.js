import { useEffect, useState } from 'react'

const fetchTodos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const useTodos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos().then((data) => {
      setTodos(data)
    })
  }, [])
  return todos
}

export default useTodos
