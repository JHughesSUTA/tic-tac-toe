const Square = ({  value, handleClick }) => {
  return (
    <button className="board-btn" onClick={handleClick}>
      {`value: ${value}`}
    </button>
  );
};

export default Square;
