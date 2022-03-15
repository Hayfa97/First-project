import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../actionsTypes/constantsPosts';

import * as api from '../../api/index';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const opts2 = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  }
    const { data } = await api.createPost(post,opts2);
    dispatch({ type: CREATE });
    dispatch(getPosts())
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (direction, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(direction, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.dir(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  const opts2 = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
}
  try {
    const { data } = await api.likePost(id,opts2);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.dir(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  const opts2 = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
}
  try {
    await api.deletePost(id,opts2);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.dir(error);
  }
};
