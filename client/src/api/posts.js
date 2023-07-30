import axios from 'axios';

const url = '/api';

export const getPostsRequests = async () => await axios.get(url + '/posts');

export const getPostRequest = async (id) =>
  await axios.get(url + '/posts/' + id);

export const createPostRequest = async (post) => {
  const form = new FormData();

  for(let key in post){
    form.append(key, post[key])
  }

  return await axios.post(url + '/posts', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deletePostRequest = async (id) =>
  await axios.delete(url + '/posts/' + id);

export const updatePostRequest = async (id, post) =>
  await axios.patch(url + '/posts/' + id, post);
