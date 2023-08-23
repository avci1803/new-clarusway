import "./App.css";
import data from "./data";

import Person from "./components/Person";

function App() {
  return (
    <div>
      {data.map((item) => (
        <Person name={item.name} img={item.img} tel={item.tel} />
      ))}
    </div>
  );
}

export default App;

/* <Person
        name="Gabriel Batistuta"
        img="https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg"
        tel="0176 0666"
      />
      <Person
        name="Micheal Crespo"
        img="https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg"
        tel="0176 8232 0666"
      />
      <Person
        name="Mario Gomez"
        img="https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg"
        tel="0176 8232 1111"
      />
  */
