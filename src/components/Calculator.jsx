import useCalculator from "./hooks/useCalculator";

const Calculator = ({ theme }) => {
  const { state, dispatch } = useCalculator();

  return (
    <div
      className={`sm:w-[340px] md:w-[400px] flex flex-col gap-[20px] p-4 ${theme.mainBackground}`}
    >
      {/* screen */}
      <div
        className={`${theme.screenBackground} ${theme.inputTextColor} p-6 rounded-lg flex flex-col items-end h-[100px]`}
      >
        <div className={`text-[24px]`}>{state.previousNumber}</div>
        <div className={`text-[32px]`}>{state.currentNumber}</div>
      </div>

      {/* keypad */}
      <div
        className={`${theme.keypadBackground} flex flex-col items-center justify-center gap-4 rounded-lg p-6 `}
      >
        <div className="grid grid-cols-4 gap-4 rounded-lg">
          {[7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "*"].map(
            (key, i) => (
              <input
                key={i}
                className={`${
                  key === "DEL"
                    ? theme.delete_ResetKeyBackground
                    : theme.numberKeyBackground
                } py-2 px-4 rounded-md text-[24px] flex items-center justify-center ${
                  theme.keyTextColor
                }`}
                type="button"
                value={key}
                onClick={() => {
                  if (key === "DEL") {
                    dispatch({ type: "delete" });
                  } else if (typeof key === "number" || key === ".") {
                    dispatch({ type: "append-number", payload: key });
                  } else {
                    dispatch({ type: "choose-operation", payload: key });
                  }
                }}
              />
            )
          )}
        </div>

        {/* reset and equals */}
        <div className="w-[100%] flex gap-2">
          <input
            type="button"
            value="reset"
            className={`${theme.delete_ResetKeyBackground} flex-1 py-2 px-4 rounded-md text-[24px]`}
            onClick={() =>
              dispatch({
                type: "reset",
              })
            }
          />
          <input
            type="button"
            value="="
            className={`${theme.equalsKeyBackground} flex-1 py-2 px-4 rounded-md text-[24px]`}
            onClick={() =>
              dispatch({
                type: "evaluate",
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
