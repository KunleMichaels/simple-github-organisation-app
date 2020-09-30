import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  user: null,
  error: false,
};

const BASE_URL = "https://api.github.com/users/";

const ACTIONS = {
  GET_USER: "get-members",
  GET_USER_DATA: "get-members-data",
  GET_USER_ERROR: "get-members-error",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_USER:
      return { ...state, loading: true };
    case ACTIONS.GET_USER_DATA:
      return { ...state, loading: false, members: action.payload };
    case ACTIONS.GET_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function useFetchUser(username) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_USER });
    axios
      .get(`${BASE_URL}${username}`)
      .then((res) =>
        dispatch({ type: ACTIONS.GET_USER_DATA, payload: res.data })
      )
      .catch((error) =>
        dispatch({ type: ACTIONS.GET_USER_ERROR, payload: error })
      );
  }, [username]);

  return state;
}
