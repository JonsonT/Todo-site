export const Main = (props) => {
  const todo_list = props.items.map((el, index) => (
    <li key={index}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={el.completed} />
        <label>{el.title}</label>
        <button
          className="destroy"
          onClick={() => {
            console.log(index);
          }}
        />
      </div>
      <input className="edit" />
    </li>
  ));

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">{todo_list}</ul>
    </section>
  );
};

//! 1)checkbox
//! 2)delete
//! 3)edit
//! 4)add
//! 5)clear completed
