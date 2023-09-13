import { createContext, useContext, useReducer } from "react";

const SettingsContext = createContext();

const initialState = {
  name: "",
  level: "1",
  status: "atHomepage",
  points: 0,
  errors: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        status: "gameOn",
        secondsRemaining: 10,
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
    default:
      throw new Error("Ation unknown");
  }
}

function SettingsProvider({ children }) {
  const [{ name, level, status, points, secondsRemaining, errors }, dispatch] =
    useReducer(reducer, initialState);

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
