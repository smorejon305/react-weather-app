import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import City from "./City";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <h2>in React</h2>
      </header>
      <Search />

      <City />

      <Weather />

      <Forecast />
    </div>
  );
}
