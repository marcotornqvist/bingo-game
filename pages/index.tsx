import type { NextPage } from "next";
import generateCard from "../helpers/generateCard";
import { useEffect, useState } from "react";
import { ISquare } from "../types";
import Form from "../components/Form";
import Game from "../components/Game";

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const [initialCard, setInitialCard] = useState<ISquare[]>([]);

  useEffect(() => {
    setInitialCard(generateCard());
  }, []);

  return (
    <div className="landing">
      <div className="container">
        {!name ? (
          <Form setName={setName} />
        ) : (
          <Game
            name={name}
            initialCard={initialCard}
            setInitialCard={setInitialCard}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
