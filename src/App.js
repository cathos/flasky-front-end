import "./App.css";
import Dog from "./components/Dog";

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
