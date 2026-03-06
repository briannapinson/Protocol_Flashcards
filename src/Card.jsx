import { useState } from 'react';


const Card = (props) => {
const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div onClick={() => setIsFlipped(!isFlipped)}>
    {isFlipped ? props.card.answer : props.card.question}
    </div>
  )
}

export default Card