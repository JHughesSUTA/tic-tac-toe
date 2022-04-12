// import IconO from "../svgs/IconO";
// import IconX from "../svgs/IconX";
import IconO from "../../assets/icon-o.svg"
import IconX from "../../assets/icon-x.svg"

const Square = ({  value, handleClick }) => {
  return (
    <button className="board-btn" onClick={handleClick}>
      {value === "O" && <img src={IconO} alt="O" />}
      {value === "X" && <img src={IconX} alt="X" />}
    </button>
  );
};

export default Square;
