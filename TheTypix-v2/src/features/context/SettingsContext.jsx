import { createContext, useContext, useReducer } from "react";

const SettingsContext = createContext();

const initialState = {
  name: "",
  level: "1",
  status: "atHomepage",
  points: 0,
  errors: 0,
  secondsRemaining: null,
  letterList: [],
  lives: 3,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        status: "gameOn",
        secondsRemaining: 100,
      };
    case "setName":
      return {
        ...state,
        name: action.payload,
      };
    case "setLevel":
      return {
        ...state,
        level: action.payload,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "gameFinished" : state.status,
      };
    case "setSettings":
      return {
        ...state,
        status: "settingOptions",
      };
    case "pointUp":
      return {
        ...state,
        points: state.points + 1,
      };
    case "errorUp":
      return {
        ...state,
        errors: state.errors + 1,
      };
    case "removeLetter":
      return {
        ...state,
        letterList: state.letterList.slice(1),
      };
    case "addLetter":
      return {
        ...state,
        letterList: [...state.letterList, action.payload],
      };
    case "setLetters":
      return {
        ...state,
        letterList: action.payload,
      };
    case "liveDown":
      return {
        ...state,
        lives: state.lives !== 0 ? state.lives - 1 : state.lives === 0,
        status: state.lives === 1 ? "gameFinished" : state.status,
      };
    default:
      throw new Error("Action unknown");
  }
}

function SettingsProvider({ children }) {
  const [
    {
      name,
      level,
      status,
      points,
      secondsRemaining,
      errors,
      letterList,
      lives,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <SettingsContext.Provider
      value={{
        name,
        level,
        status,
        points,
        secondsRemaining,
        errors,
        dispatch,
        letterList,
        lives,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined)
    throw new Error("SettingsContext was used outside of the provider");
  return context;
}

export { SettingsProvider, useSettings };
