import useCalculator from "./hooks/useCalculator";
// import useTheme from "./hooks/useTheme";

const Calculator = ({ switchTheme }) => {
  const { state, dispatch } = useCalculator();

  return (
    <div>
      <button onClick={() => switchTheme("saddikkk")}>changed</button>
      Previous: {state.previousNumber}
      <br />
      Input: {state.currentNumber}
      <div>
        {["+", "-", "*", "/"].map((operator, i) => (
          <input
            key={i}
            type="button"
            value={operator}
            onClick={() =>
              dispatch({
                type: "choose-operation",
                payload: operator,
              })
            }
          />
        ))}
        <input
          type="button"
          value="="
          onClick={() =>
            dispatch({
              type: "evaluate",
            })
          }
        />
        <input
          type="button"
          value="delete"
          onClick={() =>
            dispatch({
              type: "delete",
            })
          }
        />
        <input
          type="button"
          value="reset"
          onClick={() =>
            dispatch({
              type: "reset",
            })
          }
        />
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, i) => (
        <input
          key={i}
          type="button"
          value={number}
          onClick={() =>
            dispatch({
              type: "append-number",
              payload: number,
            })
          }
        />
      ))}
    </div>
  );
};

export default Calculator;
