import Letter from "./letter";
import "./letter-grid.css";

export default function LetterGrid({ secretWord, guessedLetters, isShown }) {
  let letters = secretWord.split("").map((letter) => {
    let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;

    return <Letter value={letter} isShown={isShown} />;
  });

  //['S','e','c','r','e','t']
  return <div className="letter-cont">{letters}</div>;
}
