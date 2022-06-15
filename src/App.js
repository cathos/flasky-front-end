import "./App.css";
import Dog from "./components/Dog";

const dogData = [
  {
    name: "Wishbone",
    favoriteToy: "Squeaker",
    chipNumber: "82373",
  },
  {
    name: "Appa",
    favoriteToy: "Ball",
    chipNumber: "29238",
  },
  {
    name: "Jimminy",
    favoriteToy: "Bone",
    chipNumber: "72902",
  },
];

function App() {
  return (
    <div className="App">
      <main>
        <h1>Dog List</h1>
        <ul>
          <Dog />
        </ul>
      </main>
    </div>
  );
}

export default App;
