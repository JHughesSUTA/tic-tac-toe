import { useState } from "react";
import Logo from "../components/svgs/Logo";
import Button from "./Button";
import IconO from "../components/svgs/IconO";
import IconX from "../components/svgs/IconX";

const NewGame = () => {
  const [playerOneMark, setPlayerOneMark] = useState("O");

  const handleClick = (mark) => {
    console.log(mark);
    setPlayerOneMark(mark);
  };

  return (
    <div className="new-game">
      <Logo />
      <div className="new-game__module">
        <h4>PICK PLAYER 1'S MARK</h4>
        <div className="new-game__selector">
          <button
            className={`module__select-button ${
              playerOneMark === "X" && "module__select-button--active"
            }`}
            onClick={() => handleClick("X")}
          >
            <IconX active={ playerOneMark === 'X' ? true : false } />
          </button>
          <button
            className={`module__select-button ${
              playerOneMark === "O" && "module__select-button--active"
            }`}
            onClick={() => handleClick("O")}
          >
            <IconO active={ playerOneMark === 'O' ? true : false } />
          </button>
        </div>
        <p>REMEMBER : X GOES FIRST</p>
      </div>
      <div className="new-game__button-container">
        <Button
          className="btn--yellow new-game__type"
          text="NEW GAME (VS CPU)"
        />
        <Button
          className="btn--blue new-game__type"
          text="NEW GAME (VS PLAYER)"
        />
      </div>
    </div>
  );
};

export default NewGame;
