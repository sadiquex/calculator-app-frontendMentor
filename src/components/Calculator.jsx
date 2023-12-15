import useCalculator from "./hooks/useCalculator";

const Calculator = ({ theme }) => {
  const { state, dispatch } = useCalculator();

  return (
    <div className={`sm:w-[340px] md:w-[400px] p-4 ${theme.mainBackground}`}>
      <div
        className={`${theme.screenBackground} p-6 rounded-lg flex flex-col items-end`}
      >
        <div className={`${theme.textWhite} text-[16px]`}>
          Previous: {state.previousNumber}
        </div>
        <div className={`${theme.textWhite} text-[24px]`}>
          Input: {state.currentNumber}
        </div>
      </div>
      <div>
        {["+", "-", "*", "/"].map((operator, i) => (
          <input
            key={i}
            className={`${theme.numberKeyBackground}`}
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
          className={`${theme.equalsKeyBackground}`}
          onClick={() =>
            dispatch({
              type: "evaluate",
            })
          }
        />
        <input
          type="button"
          value="delete"
          className={`${theme.delete_ResetKeyBackground}`}
          onClick={() =>
            dispatch({
              type: "delete",
            })
          }
        />
        <input
          type="button"
          value="reset"
          className={`${theme.delete_ResetKeyBackground}`}
          onClick={() =>
            dispatch({
              type: "reset",
            })
          }
        />
      </div>
      <div
        className={`${theme.keypadBackground} p-4 flex flex-wrap justify-start gap-4`}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, i) => (
          <input
            className={`${theme.numberKeyBackground} py-2 px-4 rounded-md text-[24px]`}
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
    </div>
  );
};

export default Calculator;
