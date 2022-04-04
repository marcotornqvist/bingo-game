import { useState, FormEvent } from "react";

interface IProps {
  setName: (name: string) => void;
}

const Form = ({ setName }: IProps) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim().length > 0) {
      setName(input.trim());
    } else {
      setError("Name cannot be empty");
    }
  };

  return (
    <section className="insert-username" role="insert-username-section">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="text-wrapper">
          <label htmlFor="username">Enter Player Name</label>
          <span
            className="error-message"
            id="username-error-id"
            aria-live="assertive"
          >
            {error}
          </span>
        </div>
        <input
          id="username"
          name="username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-errormessage="username-error-id"
          aria-invalid="true"
          type="text"
        />
        <button type="submit">Confirm Name</button>
      </form>
    </section>
  );
};

export default Form;
