import type { NextPage } from "next";
import generateCard from "../helpers/generateCard";
import { useEffect, useState } from "react";
import { ISquare } from "../types";
import Card from "../components/Card";
import NameInput from "../components/NameInput";
import generateRandomNumber from "../helpers/generateRandomNumber";
import fillWithNumbers from "../helpers/fillWithNumbers";

const Home: NextPage = () => {
  const [initialCard, setInitialCard] = useState<ISquare[]>([]);
  const [name, setName] = useState<null | string>(null);
  const [numbers, setNumbers] = useState<number[]>([0]);
  const [bingo, setBingo] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    setInitialCard(generateCard());
  }, []);

  const addNumber = () => {
    const rndInt = generateRandomNumber(fillWithNumbers(1, 75), numbers);
    setNumbers([...numbers, rndInt]);
  };

  const playAgain = () => {
    setBingo(false);
    setNumbers([0]);
    setInitialCard(generateCard());
  };

  // prevents button click for 5 seconds
  // to make sure user doesn't click the playAgain button by mistake when bingo
  useEffect(() => {
    if (bingo) {
      setDisableButton(true);
    }

    const timer = setTimeout(() => {
      setDisableButton(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [bingo]);

  return (
    <div className="landing">
      <div className="container">
        {!name ? (
          <section className="input-username">
            <NameInput setName={setName} />
          </section>
        ) : (
          <section className="game">
            <h1>BINGO</h1>
            <div className="text-wrapper">
              <span className="count">Count: {numbers.length - 1}</span>
              <span className="name">{name}</span>
            </div>
            <Card
              initialCard={initialCard}
              numbers={numbers}
              bingo={bingo}
              setBingo={setBingo}
            />
            <button
              disabled={disableButton}
              className="next-number-btn"
              onClick={() => {
                bingo ? playAgain() : addNumber();
              }}
            >
              {!disableButton
                ? bingo
                  ? "Play Again"
                  : "Next Number"
                : "Congratulations!"}
            </button>
          </section>
        )}
      </div>
    </div>
  );
};

export default Home;
