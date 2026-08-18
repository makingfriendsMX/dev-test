import React, { useMemo, useState } from "react";

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const shuffle = <T,>(items: T[]) => {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
};

export default function App() {
  const [seed, setSeed] = useState(Date.now());

  const numbers = useMemo(
    () => Array.from({ length: 8 }, () => randomInt(1, 99)),
    [seed],
  );

  const picks = useMemo(
    () => shuffle(["alpha", "bravo", "charlie", "delta", "echo"]).slice(0, 3),
    [seed],
  );

  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>Random Algo</h1>
      <button onClick={() => setSeed(Date.now())} style={{ marginBottom: 16 }}>
        Generate
      </button>

      <div>
        <strong>Numbers:</strong> {numbers.join(", ")}
      </div>
      <div>
        <strong>Pick:</strong> {picks.join(" • ")}
      </div>
    </div>
  );
}
