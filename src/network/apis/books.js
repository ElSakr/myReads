import { axiosInstance } from "../index";

const getAllBooks = async () => {
  return await axiosInstance.get("/books");
};

const getBook = async (id) => {
  return await axiosInstance.get(`/books/${id}`);
};

const updateBook = async (id, shelf) => {
  return await axiosInstance.put(`/books/${id}`, JSON.stringify({ shelf }));
};

const search = async (query, maxResults) => {
  return await axiosInstance.post(
    "/search",
    JSON.stringify({ query, maxResults })
  );
};

export { getAllBooks, getBook, updateBook, search };
