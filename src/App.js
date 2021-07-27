import "./styles.css";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Results from "./Components/Results/Results";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Results />
    </div>
  );
}
