const Reducer = (state, action) => {
  switch (action.type) {
    case "open": {
      return {
        ...state,
        open: true
      };
    }
    case "close": {
      return {
        ...state,
        open: false
      };
    }
    case "select": {
      return {
        ...state,
        selected: action.payload
      };
    }
    default: {
      throw Error(`${action.type} is not a valid type.`);
    }
  }
};

export default Reducer;
