import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  let playerName = useRef();
  const [submitted, setSubmitted] = useState(null);
  function handleClick() {
    setSubmitted(playerName.current.value);
    playerName.current.value = ''
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
