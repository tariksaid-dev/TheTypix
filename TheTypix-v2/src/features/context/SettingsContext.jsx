import { createContext, useContext, useEffect, useReducer } from "react";
import { getRanking } from "../../services/apiRanking";

const SettingsContext = createContext();

const initialState = {
  name: "",
  level: 1,
  status: "atHomepage",
  correctAnswers: 0,
  errors: 0,
  lives: 3,
  secondsRemaining: null,
  letterList: [],
  ranking: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        status: "gameOn",
        secondsRemaining: 30,
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
    case "correctAnswerUp":
      return {
        ...state,
        correctAnswers: state.correctAnswers + 1,
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
    case "setRanking":
      return {
        ...state,
        ranking: action.payload,
      };
    case "restart":
      return {
        ...initialState,
        status: "settingOptions",
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
      correctAnswers,
      secondsRemaining,
      errors,
      letterList,
      lives,
      ranking,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const livesPoints = lives > 0 ? lives * 10 : -30;
  const totalPoints = correctAnswers - errors * 3 + livesPoints;

  // needs to use it on mount of Ranking
  useEffect(() => {
    async function fetchRanking() {
      const data = await getRanking();
      dispatch({ type: "setRanking", payload: data });
    }
    fetchRanking();
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        name,
        level,
        status,
        correctAnswers,
        secondsRemaining,
        errors,
        dispatch,
        letterList,
        lives,
        ranking,
        totalPoints,
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
