import { useContext } from 'react';
import { TodosContext } from '../context/todosContext';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

// In React 18, the children prop does not exist in React.FC.
// interface Props {
//   items: Todo[];
//   children?: React.ReactNode;
//   deleteTodo: (id: string) => void;
// }

const Todos = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        // passing the entire object down
        // <TodoItem key={item.id} {...item} />

        // passing only the text field
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          removeTodo={todosCtx.removeTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
