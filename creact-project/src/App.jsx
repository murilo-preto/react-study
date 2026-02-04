import { useState, useReducer, useEffect } from "react";
import "./App.css";
import chef from "./assets/chef.png";

const items = [
  "Macaroni and Cheese",
  "Salmon With Potatoes",
  "Tofu with vegetables",
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <button type="" onClick={() => onStatus(true)}>
          Set Open
        </button>

        <h1>Welcome to this restaurant!</h1>
        <h2>Currently {openStatus ? "Open" : "Closed"}</h2>
      </div>

      <main>
        <img src={chef} height={200} alt="Photo of a drawing of a chef" />

        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyle: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  const [status, toggle] = useReducer((status) => !status, true);

  useEffect(() => {
    console.log(`The restaurant is ${status ? "open" : "closed"}`);
  }, [status]);

  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />

      <h1>The restauarnt is currently {status ? "open" : "closed"}</h1>

      <button type="" onClick={toggle}>
        {status ? "Close" : "Open"} restaurant
      </button>

      <Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
    </div>
  );
}

export default App;
