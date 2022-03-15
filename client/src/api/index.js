import axios from 'axios';

const url = 'http://localhost:7000/post';
const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
}
export const fetchPosts = () => axios.get(`${url}/getAllPosts`);

export const createPost = (addPost,opts2) => axios.post(url, addPost,opts2);
export const likePost = (id,opts2) => axios.patch(`${url}/${id}/likePost`,opts2);
export const updatePost = (id, updatePost) => axios.patch(`${url}/updatePost/${id}`,updatePost,opts);
export const deletePost = (id,opts2) => axios.delete(`${url}/${id}`,opts2);
