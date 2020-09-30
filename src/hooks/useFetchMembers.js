import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  members: [],
  error: false,
};

const BASE_URL = "https://api.github.com/orgs/andela/members";

const ACTIONS = {
  GET_MEMBERS: "get-members",
  GET_MEMBERS_DATA: "get-members-data",
  GET_MEMBERS_ERROR: "get-members-error",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_MEMBERS:
      return { ...state, loading: true };
    case ACTIONS.GET_MEMBERS_DATA:
      return { ...state, loading: false, members: action.payload };
    case ACTIONS.GET_MEMBERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function useFetchMembers() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_MEMBERS });
    axios
      .get(BASE_URL)
      .then((res) =>
        dispatch({ type: ACTIONS.GET_MEMBERS_DATA, payload: res.data })
      )
      .catch((error) =>
        dispatch({ type: ACTIONS.GET_MEMBERS_ERROR, payload: error })
      );
  }, []);

  return state;
}
