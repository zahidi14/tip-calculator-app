import { useEffect, useState } from "react";
import "./App.scss";
import { Button, Input } from "./Component";
import Dollar from "./assets/images/icon-dollar.svg?react";
import People from "./assets/images/icon-person.svg?react";

function App() {
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  const click = (value) => () => {
    setTip(value);
  };
  const handleInput = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setTip(value);
    }
  };

  const calculate = () => {
    const billFloat = parseFloat(bill);
    const tipp = parseFloat(tip) / 100;
    const peoples = parseFloat(people);

    const amountTip = billFloat * tipp * peoples;
    const totals = billFloat / peoples + amountTip;
    setTipAmount(amountTip.toFixed(2));
    setTotal(totals.toFixed(2));
  };

  const reset = () => {
    setBill(0);
    setPeople(0);
    setTip(0);
    setTotal(0);
  };
  useEffect(() => {
    calculate();
  }, [bill, tip, people]);
  console.log({ tip: tipAmount });

  return (
    <div className="body">
      <div className="headTitle">
        <h1>Splitter</h1>
      </div>

      <div className="container">
        <div className="left">
          <div className="head">Bill</div>
          <Input
            type="text"
            name="bill"
            logo={<Dollar />}
            onChange={(e) => setBill(e.target.value)}
          />
          <div className="head">Select Tip %</div>
          <div className="buttonCont">
            <Button name="5%" onClick={click(5)} />
            <Button name="10%" onClick={click(10)} />
            <Button name="15%" onClick={click(15)} />
            <Button name="25%" onClick={click(25)} />
            <Button name="50%" onClick={click(50)} />
            <input
              name="Custom"
              id="custom"
              placeholder="Custom"
              onChange={handleInput}
            />
          </div>
          <div className="head">Number of People</div>
          <Input
            type="text"
            name="people"
            logo={<People />}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>
        <div className="right">
          <div className="result">
            <div className="title">
              <div className="top">Tip Amount</div>{" "}
              <div className="bottom">/ person</div>{" "}
            </div>
            <div className="number">${tipAmount}</div>
          </div>
          <div className="result">
            <div className="title">
              <div className="top">Total</div>{" "}
              <div className="bottom">/ person</div>{" "}
            </div>
            <div className="number">${total}</div>
          </div>
          <Button name="reset" onClick={reset} />
        </div>
      </div>
    </div>
  );
}

export default App;
