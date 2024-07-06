// Purpose: This file contains the logic for the calculator. It takes in the type of button pressed, the value of the button, and the current state of the calculator. It then returns the new state of the calculator based on the button pressed.
export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null
};

// handle the number button press event 
export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return { currentValue: `${value}` };
  }

  // if the current value is not 0, append the value to the current value
  return {
    currentValue: `${state.currentValue}${value}`
  };
};

// handle the equal button press event 
export const handleEqual = state => {

  // destructure the state object 
  const { currentValue, previousValue, operator } = state;

  // convert the current and previous values to float
  const current = parseFloat(currentValue);

  // if the previous value is not null, perform the operation based on the operator
  const previous = parseFloat(previousValue);

  // reset the state object 
  const resetState = {
    operator: null,
    previousValue: null
  };

  // perform the operation based on the operator
  if (operator === "/") {
    return {
      currentValue: previous / current,
      ...resetState
    };
  }

  // perform the operation based on the operator
  if (operator === "*") {
    return {
      currentValue: previous * current,
      ...resetState
    };
  }

  if (operator === "+") {
    return {
      currentValue: previous + current,
      ...resetState
    };
  }

  if (operator === "-") {
    return {
      currentValue: previous - current,
      ...resetState
    };
  }

  return state;
};

const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0"
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    case "posneg":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`
      };
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`
      };
    default:
      return state;
  }
};

export default calculator;
