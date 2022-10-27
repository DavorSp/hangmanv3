import "./letter.css";

export default function Letter({ value, isShown }) {
  let output = " ";
  if (isShown) output = value;
  return <div className="output-span">{output}</div>;
}
