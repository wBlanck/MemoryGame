import "./SingleCard.css";

function SingleCard({ card, src, handleChoice }) {
  const handleClick = (e) => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div>
        <img className="front" src={src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default SingleCard;
