import axios from "axios";

export const FETCH_BLOGS_REQUEST = "FETCH_BLOGS_REQUEST";
export const FETCH_BLOGS_SUCCESS = "FETCH_BLOGS_SUCCESS";
export const FETCH_BLOGS_FAIL = "FETCH_BLOGS_FAIL";
export const FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAIL = "FETCH_COMMENTS_FAIL";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";

export const requestBlogs = () => {
  return {
    type: FETCH_BLOGS_REQUEST,
  };
};

export const fetchBlogsSuccess = (data) => {
  return {
    type: FETCH_BLOGS_SUCCESS,
    payload: data,
  };
};

export const fetchBlogsFail = (data) => {
  return {
    type: FETCH_BLOGS_FAIL,
    payload: data,
  };
};

export const requestComments = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};

export const fetchCommentsSuccess = (data) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: data,
  };
};

export const fetchCommentsFail = (data) => {
  return {
    type: FETCH_COMMENTS_FAIL,
    payload: data,
  };
};

export const setSearchQuery = (data) => {
  return {
    type: SET_SEARCH_QUERY,
    payload: data,
  };
};

export const fetchBlogs = (data) => (dispatch) => {
  dispatch(requestBlogs());
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(async (response) => {
      // console.log("blog receive data is =========>", response);
      if (response.data && response.status === 200) {
        dispatch(fetchBlogsSuccess(response.data));
      } else dispatch(fetchBlogsFail(response.data));
    });
};

export const fetchCommnets = (postId) => (dispatch) => {
  dispatch(requestComments());
  axios
    .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(async (response) => {
      // console.log("comment receive data is =========>", response);
      if (response.data && response.status === 200) {
        dispatch(fetchCommentsSuccess(response.data));
      } else dispatch(fetchCommentsFail(response.data));
    });
};
