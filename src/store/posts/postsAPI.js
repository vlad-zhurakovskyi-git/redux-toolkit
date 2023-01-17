import axios from "axios";

export const fetchPosts = async (limit = 10, page = 0) => {
  return await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: {
      _limit: limit,
      _page: page
    }
  });
}
