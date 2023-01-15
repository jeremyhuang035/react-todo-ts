import { useRef, useContext } from 'react';
import { TodosContext } from '../context/todosContext';
import classes from './NewTodo.module.css';

// useRef -> uncontrolled component -> get element from DOM

// interface Props {
//   addTodo: (text: string) => void;
// }

const NewTodo = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  //  use React.FormEvent<HTMLFormElement> for events on form elements, like onSubmit or onReset, and React.SyntheticEvent<T, E> for events on other DOM elements.
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // const enteredText = todoTextInputRef.current?.value;
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todo">Todo text</label>
      <input type="text" id="todo" ref={todoTextInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
