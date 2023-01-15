import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './context/todosContext';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <TodoList />
    </TodosContextProvider>
  );
}

export default App;
