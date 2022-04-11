import "./App.css";
import NewGameScreen from "./components/NewGameScreen/NewGameScreen";
import Board from "./components/game/Board";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        {/* <NewGameScreen /> */}
        <Board />
      </div>
    </div>
  );
};

export default App;
