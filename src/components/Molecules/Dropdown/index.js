import React, { useEffect, useReducer, useRef } from "react";

// Reducer
import reducer from "./reducer";
import initial_state from "./initial_state";

// Components
import { Box } from "theme-ui";
import Text from "../../Atoms/Text";

// Styles
import styles from "./styles";

const Dropdown = ({ captureResult, options, placeholder }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  const ref = useRef(null);

  const handleSelectOption = (option) => {
    dispatch({ type: "select", payload: option });
  };

  const handleOpen = () => {
    if (state.open) {
      dispatch({ type: "close" });
    } else {
      dispatch({ type: "open" });
    }
  };

  useEffect(() => {
    if (typeof captureResult === "function") {
      captureResult(state.selected);
    }
  }, [captureResult, state.selected]);

  return (
    <Box
      as="div"
      onClick={() => handleOpen()}
      onBlur={() => dispatch({ type: "close" })}
      ref={ref}
      sx={{ ...styles.container }}
    >
      <Box
        sx={{
          ...styles.placeholder
        }}
      >
        <Text>
          {(state.selected && state.selected.label) ||
            placeholder ||
            "Placeholder"}
        </Text>
      </Box>
      <Box
        as="ul"
        sx={{
          ...styles.list,
          display: state.open ? "block" : "none"
        }}
      >
        {options &&
          options.map((opt, index) => (
            <Box
              as="li"
              key={opt.value}
              onClick={() => handleSelectOption(opt)}
              tabIndex="1"
              sx={{
                ...styles.item
              }}
            >
              {opt.label}
            </Box>
          ))}
      </Box>
      {/* State Debugger */}
      <Box as="pre" sx={{ position: "absolute", top: 0, left: 0 }}>
        {JSON.stringify(state)}
      </Box>
    </Box>
  );
};

export default Dropdown;
