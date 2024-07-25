import React, { useState } from "react";
import "./App.css";

const App = () => {
  //making states
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  //Logic
  const calBmi = (e) => {
    e.preventDefault(); // Prevent form submission
    if (weight === 0 || height === 0) {
      alert("Please enter valid weight and height");
    } else {
      const bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // Set message based on BMI value
      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are a healthy person");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  //reload
  const reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi("");
    setMessage("");
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (In)</label>
            <input
              type="text"
              placeholder="Enter Height Value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
