import React from "react";
import Confetti from "react-dom-confetti";

interface IProps {
  bingo: boolean;
}

const config = {
  angle: 90,
  spread: 150,
  startVelocity: 40,
  elementCount: 136,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  colors: ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"],
};

const ConfettiExplosion = ({ bingo }: IProps) => {
  return (
    <div className="confetti-explosion">
      <Confetti active={bingo} config={config} />
    </div>
  );
};

export default ConfettiExplosion;
