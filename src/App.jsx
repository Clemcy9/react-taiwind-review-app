import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cardImage from "./assets/popcast.jpg";
import "./App.css";
import Button from "./components/Button";
import Sample from "./components/Sample";
import Card from "./components/Card";
import CardsHolder from "./components/CardsHolder";

function App() {
  return (
    <>
      <Button name="Give feedback" location="home" outline="true" />
      <Card src={cardImage} name="Trainings" />
      <CardsHolder />
    </>
  );
}

export default App;
