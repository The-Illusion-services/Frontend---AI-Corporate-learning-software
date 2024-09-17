import React, { useState } from "react";

const UndoRedoExample = () => {
  const [state, setState] = useState("");
  const [history, setHistory] = useState([]); // Stack for undo
  const [future, setFuture] = useState([]); // Stack for redo

  const updateState = (newState) => {
    setHistory([...history, state]); // Save current state to history before updating
    setState(newState);
    setFuture([]); // Clear redo stack when a new state is created
  };

  const undo = () => {
    if (history.length === 0) return;
    const previousState = history[history.length - 1];
    setFuture([state, ...future]); // Save current state to future before undoing
    setState(previousState); // Revert to previous state
    setHistory(history.slice(0, history.length - 1)); // Remove last state from history
  };

  const redo = () => {
    if (future.length === 0) return;
    const nextState = future[0];
    setHistory([...history, state]); // Save current state to history before redoing
    setState(nextState); // Move to next state
    setFuture(future.slice(1)); // Remove first state from future
  };

  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(e) => updateState(e.target.value)}
      />
      <br />
      <button onClick={undo} disabled={history.length === 0}>
        Undo
      </button>
      <button onClick={redo} disabled={future.length === 0}>
        Redo
      </button>
    </div>
  );
};

export default UndoRedoExample;
