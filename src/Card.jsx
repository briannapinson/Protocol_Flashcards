import './Card.css';
import { useState } from 'react';


const Card = (props) => {
const [isFlipped, setIsFlipped] = useState(false);

const getColor = (layer) => {
  if (layer === "Application") return "#db975a";
  else if (layer === "Transport") return "#f6c597";
  else if (layer === "Network") return "#c67972";
  else if (layer === "Data Link") return "#ab534b";
  else if (layer === "Physical") return "#647a8d";
}

  return (
    <div className="card" 
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ backgroundColor: getColor(props.card.layer) }}>
        {isFlipped ? props.card.answer : props.card.question}
    </div>
  )
}

export default Card
