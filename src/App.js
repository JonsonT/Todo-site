import "./styles/App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  const appTitle = "TodosApp";

  const todos = [
    { title: "Learn React", completed: false },
    { title: "Listen to Nir React", completed: false },
    { title: "Learn JS", completed: true },
  ];
  // Events
  // const addTodo = () => {}
  const removeTodo = (item) => {
    return console.log(item);
  };

  // todo: where should we implemnt it?
  // const markAsCompleted = () => {}

  // const clearAllCompleted = () => {}

  // const toggleAll = () => {}

  // todo: pass title, placeholder to header
  // todo: pass item left to footer
  // todo: BONUS THINK ABOUT EDIT IN PLACE (DOUBLE CLICK TO VHANGE ITEM)

  return (
    <section className="todoapp">
      <Header
        title={appTitle}
        // onAddItem={addTodo}
        // text="What needs to be done?"
      />
      <Main items={todos} />
      <Footer />
    </section>
  );
}

export default App;
