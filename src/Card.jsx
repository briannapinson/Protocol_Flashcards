import './Card.css';
import { useState } from 'react';

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState(null);

  const checkGuess = () => {
    if (guess.toLowerCase() === props.card.answer.toLowerCase()) {
      setResult("correct");
    } else {
      setResult("incorrect");
    }
  }

  const getColor = (layer) => {
    if (layer === "Application") return "#db975a";
    else if (layer === "Transport") return "#f6c597";
    else if (layer === "Network") return "#c67972";
    else if (layer === "Data Link") return "#ab534b";
    else if (layer === "Physical") return "#647a8d";
  }

  return (
    <div className="container">
      <div 
        className="card" 
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ backgroundColor: getColor(props.card.layer) }}
      >
        {isFlipped ? (
          <p>{props.card.answer}</p>
        ) : (
          <div>
            <p>{props.card.question}</p>
            {props.card.image && <img src={props.card.image} alt="card" className="image" />}
          </div>
        )}
      </div>

      <input
        type="text"
        value={guess}
        placeholder="Type your guess..."
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={checkGuess}>Submit</button>
      {result && (
        <p className={result}>
          {result === "correct" ? "✓ Correct!" : "✗ Incorrect!"}
        </p>
      )}

    </div>
  )
}

export default Card