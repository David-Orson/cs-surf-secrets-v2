import {
  SET_POSTS,
  LOADING_DATA,
  LIKE_POST,
  UNLIKE_POST,
  DELETE_POST,
  CREATE_POST,
  CLEAR_ERRORS,
  SET_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_POST,
  SUBMIT_COMMENT,
  ADD_TODO,
} from "../types";
import axios from "axios";

export const getPosts = () => (dispatch: any) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/posts")
    .then((res) => {
      dispatch({
        type: SET_POSTS,
        payload: res.data,
      });
    })
    .catch((err: any) => {
      /* dispatchEvent({
        type: SET_POSTS,
      }); */
      // FIX THIS
      console.log(err);
    });
};

export const getPost = (postId: any) => (dispatch: any) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/post/${postId}`)
    .then((res) => {
      dispatch({ type: SET_POST, payload: res.data });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};

export const createPost = (newPost: any) => (dispatch: any) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/post", newPost)
    .then((res) => {
      dispatch({
        type: CREATE_POST,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const likePost = (postId: any) => (dispatch: any) => {
  axios
    .get(`/post/${postId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_POST,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const unlikePost = (postId: any) => (dispatch: any) => {
  axios
    .get(`/post/${postId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_POST,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const submitComment = (postId: any, commentData: any) => (
  dispatch: any
) => {
  axios
    .post(`/post/${postId}/comment`, commentData)
    .then((res) => {
      dispatch({
        type: SUBMIT_COMMENT,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const deletePost = (postId: any) => (dispatch: any) => {
  axios
    .delete(`/post/${postId}`)
    .then(() => {
      dispatch({ type: DELETE_POST, payload: postId });
    })
    .catch((err) => console.log(err));
};

export const getUserData = (userHandle: any) => (dispatch: any) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}`)
    .then((res) => {
      dispatch({
        type: SET_POSTS,
        payload: res.data.posts,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_POSTS,
        payload: null,
      });
    });
};

export const clearErrors = () => (dispatch: any) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const addTodo = (newTodo: any) => (dispatch: any) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/todo", newTodo)
    .then((res) => {
      dispatch({
        type: ADD_TODO,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};
