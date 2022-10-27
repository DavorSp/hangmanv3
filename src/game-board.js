import { useState } from "react";
import ButtonGrid from "./Components/ButtonGrid";
import LetterGrid from "./letter-grid";
import './game-board.css'

export default function GameBoard({ secretWord }) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  let [count, setCount] = useState(5);

  function handleClick(e) {
    setGuessedLetters([...guessedLetters, e.target.value.toLowerCase()]);
    if (!secretWord.includes(e.target.value.toLowerCase())) {
      setCount(count - 1);
      e.target.className = "btnclass-w";
    } else {
      e.target.className = "btnclass-r";
    }
    e.target.disabled = true;
  }

  return (
    <div>
      {count > 0 && (
        <>
          <LetterGrid secretWord={secretWord} guessedLetters={guessedLetters} />
          <ButtonGrid handleClick={handleClick} />
          <div onClick={handleClick}>Lives remaining:{count}</div>
        </>
      )}
      {count === 0 && (
        <div>
          <LetterGrid secretWord={secretWord} guessedLetters={secretWord} />
          <div>You are illiterate.</div>
          <button className="playagain-btn" onClick={() => window.location.reload(false)}>Play Again</button>
        </div>
      )}
    </div>
  );
}
