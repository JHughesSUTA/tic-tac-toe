import "./App.css";
import NewGameScreen from "./components/NewGameScreen/NewGameScreen";
import Board from "./components/game/Board";
import Game from "./components/game/Game";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        {/* <NewGameScreen /> */}
        <Game />
        {/* <Board /> */}
      </div>
    </div>
  );
};

export default App;
