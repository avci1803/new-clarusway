import Event from "./components/1-Events/Event";
import Counter from "./components/2-classComponents/Counter";
import UseStateCounter from "./components/3-useStateHooks/UseStateCounter";
import UseStateObject from "./components/3-useStateHooks/UseStateObject";

function App() {
  return (
    <div>
      <Event />
      <Counter />
      <UseStateCounter />
      <UseStateObject />
    </div>
  );
}

export default App;
