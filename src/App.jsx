import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    //Lifted state, originally in Input.jsx
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <Input userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter valid input data</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
