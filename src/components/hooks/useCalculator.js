import { useReducer } from "react";

const useCalculator = () => {
  const reducer = (state, action) => {
    // check for the action type dispatched
    switch (action.type) {
      // digits user clicks on
      case "append-number":
        return {
          // spread the previous states
          ...state,
          // add the current previous input (currentNumber) to the recent value (payload)
          currentNumber: `${state.currentNumber || ""}${action.payload}`,
        };
      case "choose-operation":
        if (state.previousNumber == null) {
          return {
            ...state,
            operation: action.payload,
            // when a number is selected, set the previous number as the current number
            previousNumber: state.currentNumber,
            currentNumber: null,
          };
        }
        return {
          ...state,
          // evaluate the previous numbers and store them in previousNumber
          // pass the state object(containing the numbers) to the evaluate function
          previousNumber: evaluate(state),
          operation: action.payload,
          currentNumber: null,
        };
      case "evaluate":
        // do nothing if we don't have all the info we need - (operator & numbers)
        if (
          state.currentNumber == null ||
          state.previousNumber == null ||
          state.operation == null
        ) {
          return state;
        }
        // evaluate when we have all the info
        return {
          ...state,
          previousNumber: null,
          operation: null,
          currentNumber: evaluate(state),
        };
      // set the currentNumber to null when the delete button is clicked
      case "delete":
        return {
          ...state,
          currentNumber: null,
        };
      case "reset":
        return {};
      default:
        return state;
    }
  };
  // function to do the calculation
  // arguments from state
  const evaluate = ({ currentNumber, previousNumber, operation }) => {
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    // if any of them isn't a number, return an empty string
    if (isNaN(prev) || isNaN(current)) return "";

    switch (operation) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "*":
        return prev * current;
      case "/":
        return prev / current;
      default:
        return "";
    }
  };

  // state is {} by default
  const [state, dispatch] = useReducer(reducer, {});

  return { state, dispatch };
};

export default useCalculator;
