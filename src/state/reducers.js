import {
  FETCH_BLOGS_FAIL,
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
  SET_SEARCH_QUERY,
} from "./actions";

const reducer = (
  state = {
    blogs: [],
    error: false,
    loading: false,
    comments: [],
    searchQuery: "",
  },
  action
) => {
  switch (action.type) {
    case FETCH_BLOGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: action.payload,
        loading: false,
        error: false,
      };
    case FETCH_BLOGS_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        error: false,
      };
    case FETCH_COMMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
      break;

    default:
      break;
  }
};

export default reducer;
