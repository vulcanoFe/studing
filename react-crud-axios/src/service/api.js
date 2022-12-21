import axios from "axios";

const URL = "http://127.0.0.1:3003/user";

export const getAllUsers = async (id) => {
  id = id || '';
  return await axios.get(`${URL}/${id}`);
}

export const addUser = async (user) => {
  return await axios.post(URL, user);
}

export const editUser = async (id, user) => {
  return await axios.put(`${URL}/${id}`, user);
}

export const deleteUser = async (id) => {
  return await axios.delete(`${URL}/${id}`)
}