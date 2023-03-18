import React, { useState } from "react";
import "./App.css";

function App() {
  const [changeValue, setChangeValue] = useState();
  const [chackVal, setCheckVal] = useState("");
  const [show, setShow] = useState(true);

  const getValue = (e) => {
    setChangeValue(changeValue ? changeValue + e.target.value : e.target.value);
  };

  const opratorValue = (e) => {
    setCheckVal(e.target.value);
    setShow(true);
    setChangeValue(changeValue ? changeValue + e.target.value : null);
  };

  const equalVal = () => {
    if (changeValue.includes("+")) {
      var val = changeValue.split("+");
      setChangeValue(parseInt(val[0]) + parseInt(val[1]));
    } else if (changeValue.includes("-")) {
      var val = changeValue.split("-");
      setChangeValue(parseInt(val[0]) - parseInt(val[1]));
    } else if (changeValue.includes("*")) {
      var val = changeValue.split("*");
      setChangeValue(parseInt(val[0]) * parseInt(val[1]));
    } else if (changeValue.includes("/")) {
      var val = changeValue.split("/");
      setChangeValue(parseInt(val[0]) / parseInt(val[1]));
    }
    setShow(false);
  };

  const clearVal = () => {
    setChangeValue("");
    setShow(false);
  };

  return (
    <div className="box">
      <div className="display">
        <input type="text" readOnly size="18" value={changeValue} id="d" />
      </div>
      <div className="keys">
        <p>
          <input
            type=""
            className="button"
            value=""
            disabled
            style={{
              cursor: "unset",
              width: "149px",
              background: "#fff",
              color: "#000",
            }}
          />

          <input
            disabled={chackVal ? show : false}
            type="button"
            className="button pink"
            value="/"
            onClick={opratorValue}
          />
        </p>
        <p>
          <input
            type="button"
            className="button black"
            value="7"
            onClick={getValue}
          />
          <input
            type="button"
            className="button black"
            value="8"
            onClick={getValue}
          />
          <input
            type="button"
            className="button black"
            value="9"
            onClick={getValue}
          />
          <input
            disabled={chackVal ? show : false}
            type="button"
            className="button pink"
            value="*"
            onClick={opratorValue}
          />
        </p>
        <p>
          <input
            type="button"
            className="button black"
            value="4"
            onClick={getValue}
          />
          <input
            type="button"
            className="button black"
            value="5"
            onClick={getValue}
          />
          <input
            type="button"
            className="button black"
            value="6"
            onClick={getValue}
          />
          <input
            disabled={chackVal ? show : false}
            type="button"
            className="button pink"
            value="-"
            onClick={opratorValue}
          />
        </p>
        <p>
          <input
            type="button"
            className="button black"
            value="1"
            onClick={getValue}
          />
          <input
            type="button"
            className="button black"
            value="2"
            onClick={getValue}
          />
          <input
            type="button"
            className="button black"
            value="3"
            onClick={getValue}
          />
          <input
            disabled={chackVal ? show : false}
            type="button"
            className="button pink"
            value="+"
            onClick={opratorValue}
          />
        </p>
        <p>
          <input
            type="button"
            className="button black"
            value="0"
            onClick={getValue}
          />
          <input
            type="button"
            className="button black"
            value="."
            onClick={getValue}
          />
          <input
            type="button"
            className="button black"
            value="C"
            onClick={clearVal}
          />
          <input
            type="button"
            className="button orange"
            value="="
            onClick={equalVal}
          />
        </p>
      </div>
    </div>
  );
}

export default App;
