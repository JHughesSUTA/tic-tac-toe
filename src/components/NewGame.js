import Logo from "../components/svgs/Logo"
import Button from "./Button"
import IconO from "../components/svgs/IconO"
import IconX from "../components/svgs/IconX"

const NewGame = () => {
  return (
    <div className="new-game">
      <Logo />
      <div className="new-game__pick">
        <h4>PICK PLAYER 1'S MARK</h4>
        <div className="new-game__pick__selector">
          <button className="new-game__pick__selector__button--active">
            <IconX />
          </button>
          <button className="new-game__pick__selector__button">
            <IconO />
          </button>
        </div>
        <p>REMEMBER : X GOES FIRST</p>
      </div>
      <Button className="btn--yellow" text="NEW GAME (VS CPU)" />
      <Button className="btn--blue" text="NEW GAME (VS PLAYER)" />
    </div>
  );
}

export default NewGame