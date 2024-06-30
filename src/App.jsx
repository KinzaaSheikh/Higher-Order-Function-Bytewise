import SearchTodos from "./components/TodoList"
import SearchUsers from "./components/UsersList"


function App() {
  return (
    <div className="App">
      <h2>Higher Order Component</h2>
      <div className="sectiom">
        <div>
          <SearchUsers />
        </div>
        <div>
          <SearchTodos />
        </div>
      </div>
    </div>
  )
}

export default App
