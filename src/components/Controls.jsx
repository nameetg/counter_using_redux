import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const counterDispatch = useDispatch();
  const inputElement = useRef();

  const handleIcrement = () => {
    counterDispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    counterDispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    counterDispatch({
      type: "ADD",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    counterDispatch({
      type: "SUBTRACT",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };

  const handlePrivacy = () => {
    counterDispatch({
      type: "PRIVACY_TOGGLE",
    });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIcrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacy}
        >
          Privacy toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center inputDiv">
        <input
          type="text"
          placeholder="Enter number"
          className="inputNumber"
          ref={inputElement}
        />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
