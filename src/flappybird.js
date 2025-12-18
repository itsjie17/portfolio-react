import { useEffect, useRef, useState } from "react";
import "./FlappyBird.css";

export default function FlappyBird({ autoStart = false }) {
  const gameRef = useRef(null);
  const birdRef = useRef(null);

  const gravity = 0.6;
  const jumpStrength = -10;

  const [birdY, setBirdY] = useState(200);
  const [velocity, setVelocity] = useState(0);
  const [pipes, setPipes] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  const highScore =
    Number(localStorage.getItem("flappyHighScore")) || 0;

  // Game loop
  useEffect(() => {
  if (autoStart) {
    setStarted(true);
  }
}, [autoStart]);

  useEffect(() => {
    if (!started || gameOver) return;

    const loop = setInterval(() => {
      setVelocity((v) => v + gravity);
      setBirdY((y) => y + velocity);

      setPipes((prev) =>
        prev
          .map((p) => ({ ...p, x: p.x - 4 }))
          .filter((p) => p.x > -60)
      );
    }, 20);

    return () => clearInterval(loop);
  }, [velocity, started, gameOver]);

  // Spawn pipes
  useEffect(() => {
    if (!started || gameOver) return;

    const pipeInterval = setInterval(() => {
      const gap = 140;
      const topHeight = Math.random() * 200 + 50;

      setPipes((p) => [
        ...p,
        {
          x: 400,
          top: topHeight,
          bottom: 400 - topHeight - gap,
          passed: false,
        },
      ]);
    }, 1800);

    return () => clearInterval(pipeInterval);
  }, [started, gameOver]);

  // Collision & scoring
  useEffect(() => {
    pipes.forEach((p) => {
      if (
        p.x < 80 &&
        p.x > 20 &&
        (birdY < p.top || birdY > 400 - p.bottom)
      ) {
        setGameOver(true);
        if (score > highScore) {
          localStorage.setItem("flappyHighScore", score);
        }
      }

      if (!p.passed && p.x < 20) {
        p.passed = true;
        setScore((s) => s + 1);
      }
    });

    if (birdY > 380 || birdY < 0) {
      setGameOver(true);
      if (score > highScore) {
        localStorage.setItem("flappyHighScore", score);
      }
    }
  }, [birdY, pipes, score, highScore]);

  const jump = () => {
    if (!started) {
      setStarted(true);
      return;
    }
    setVelocity(jumpStrength);
  };

  const reset = () => {
    setBirdY(200);
    setVelocity(0);
    setPipes([]);
    setScore(0);
    setGameOver(false);
    setStarted(false);
  };

  return (
    <div className="page">
      <div className="flappy-wrapper">
        <h2>Flappy Bird Mini 🐦</h2>

        <div
          className="game-area"
          ref={gameRef}
          onClick={jump}
        >
        <div
          className="bird"
          ref={birdRef}
          style={{ top: birdY }}
        />

        {pipes.map((p, i) => (
          <div key={i}>
            <div
              className="pipe top"
              style={{ height: p.top, left: p.x }}
            />
            <div
              className="pipe bottom"
              style={{ height: p.bottom, left: p.x }}
            />
          </div>
        ))}

        {!started && !gameOver && (
          <div className="overlay">Click to Start</div>
        )}

        {gameOver && (
          <div className="overlay">
            <p>Game Over 💀</p>
            <button onClick={reset}>Restart</button>
          </div>
        )}
      </div>

      <div className="score">
        Score: {score} | High Score: {highScore}
      </div>
      </div>
    </div>
  );
}
