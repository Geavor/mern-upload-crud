import { useState, useContext, createContext, useEffect } from 'react';
import {
  createPostRequest,
  deletePostRequest,
  getPostRequest,
  getPostsRequests,
  updatePostRequest,
} from '../api/posts';

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await getPostsRequests();
    setPosts(res.data);
  };

  const getPost = async (id) => {
    const res = await getPostRequest(id);
    return res.data;
  };

  const createPost = async (post) => {
    try {
      const res = await createPostRequest(post);
      setPosts([...posts, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    const res = await deletePostRequest(id);
    if (res.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  };

  const updatePost = async (id, post) => {
    const res = await updatePostRequest(id, post);
    setPosts(posts.map((post) => (post._id === id ? res.data : post)));
    console.log(res);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider
      value={{
        posts,
        getPosts,
        getPost,
        createPost,
        deletePost,
        updatePost,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
