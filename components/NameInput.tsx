import React, { useEffect, useState } from "react";

interface IProps {
  setName: (name: string) => void;
}

const NameInput = ({ setName }: IProps) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (input.length > 0) {
      setName(input);
    } else {
      setError("Name cannot be empty");
    }
  };

  return (
    <div className="name-input-group">
      <div className="text-wrapper">
        <label htmlFor="name">Enter Player Name</label>
        <span className="error-message">{error}</span>
      </div>
      <input
        type="text"
        name="name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Confirm Name</button>
    </div>
  );
};

export default NameInput;
