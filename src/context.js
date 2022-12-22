import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = { darkMode: false, enEs: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case "EN/ES":
      return { ...state, 
        enEs: !state.enEs };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
