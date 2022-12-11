export const Header = (props) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value.length > 0) {
      props.onAddItem([event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <input
        className="new-todo"
        placeholder={props.text}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </header>
  );
};
