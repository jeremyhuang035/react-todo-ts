import classes from './TodoItem.module.css';
// import Todo from '../models/todo';

// const TodoItem: React.FC <{text: string}>= (props) => {
//   return <li>{props.text}</li>;
// }

// specify the type of props
interface Props {
  id: string;
  text: string;
  removeTodo: (id: string) => void;
}

const TodoItem = (props: Props) => {
  return (
    <>
      <li className={classes.item}>{props.text}</li>
      <button
        className={classes.rmBtn}
        onClick={() => props.removeTodo(props.id)}
      >
        Delete
      </button>
    </>
  );
};

export default TodoItem;
