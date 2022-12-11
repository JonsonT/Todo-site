import { TodoList } from "./TodoList";
export const Main = ({ items, removeTodo }) => {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <TodoList items={items} removeTodo={removeTodo} />
    </section>
  );
};

//! 1)checkbox
//! 2)delete
//! 3)edit
//! 4)add
//! 5)clear completed
