import React from 'react'
import "./App.css";
import chef from "./assets/chef.png"

const items = [
  "Macaroni and Cheese",
  "Salmon With Potatoes",
  "Tofu with vegetables",
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

let language = "JavaScript";
let moon = "🌙";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

function Main({ dishes }) {
  return (
    <>
      <div>
        <h2>Welcome to this restaurant!</h2>
      </div>
      <main>
        <img
          src={chef}
          height={200}
          alt="Photo of a drawing of a chef"
        />
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
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
