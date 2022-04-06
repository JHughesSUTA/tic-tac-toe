import { useState } from "react";
import Logo from "../components/svgs/Logo";
import Button from "./Button";
import IconO from "../components/svgs/IconO";
import IconX from "../components/svgs/IconX";

const NewGame = () => {
  const [playerOneMark, setPlayerOneMark] = useState("X");

  const handleClick = (mark) => {
    console.log(mark)
    setPlayerOneMark(mark)
  };

  return (
    <div className="new-game">
      <Logo />
      <div className="new-game__module">
        <h4>PICK PLAYER 1'S MARK</h4>
        <div className="new-game__selector">
          <button
            className={
              playerOneMark === "X"
                ? "module__select-button--active"
                : "module__select-button"
            }
            onClick={() => handleClick("X")}
          >
            <IconX />
          </button>
          <button
            className={
              playerOneMark === "O"
                ? "module__select-button--active"
                : "module__select-button"
            }
            onClick={() => handleClick("O")}
          >
            <IconO />
          </button>
        </div>
        <p>REMEMBER : X GOES FIRST</p>
      </div>
      <Button className="btn--yellow" text="NEW GAME (VS CPU)" />
      <Button className="btn--blue" text="NEW GAME (VS PLAYER)" />
    </div>
  );
};

export default NewGame;
