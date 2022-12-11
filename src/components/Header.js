export const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
};
