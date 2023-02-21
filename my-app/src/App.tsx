import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [disabledStart, setDisabledStart] = useState(false);
  const [disabledStop, setDisabledStop] = useState(false);

  useEffect(() => {
    let interval: any;

    if (isPaused) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isPaused) {
      clearInterval(interval);
      setDisabledStop(true);
    }

    return () => clearInterval(interval);
  }, [isPaused, seconds]);

  const handleStartButton = (e: any) => {
    setIsPaused(true);
    setDisabledStart(true);
    setDisabledStop(false);
  };

  const handlePauseButton = (e: any) => {
    setIsPaused(false);
    setDisabledStop(true);
    setDisabledStart(false);
  };

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h2>Enjoy this super funny application 😛</h2>
      <div>
        <span className="App__seconds">{seconds}</span>
        <Button
          disabled={disabledStart}
          style={{ marginRight: "30px" }}
          variant="contained"
          color="primary"
          onClick={handleStartButton}
        >
          Start
        </Button>
        <Button
          disabled={disabledStop}
          variant="contained"
          color="secondary"
          onClick={handlePauseButton}
        >
          Pause
        </Button>
      </div>
    </div>
  );
}

export default App;
