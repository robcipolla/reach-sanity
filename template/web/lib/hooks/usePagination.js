import { useState } from "react";

/**
 * Custom pagination hook
 *
 * @param {Object} posts Posts to be paginated
 * @return {Object} Pagination hook
 */
export default function usePagination(posts) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPosts = posts.length;
  const postsPerPage = 3;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  /**
   * Pagination function
   *
   * @param {BaseSyntheticEvent} e The click event
   * @param {number} number Pagination page number
   */
  function paginate(e, number) {
    e.preventDefault();
    setCurrentPage(number);
  }

  return {
    currentPosts,
    currentPage,
    pageNumbers,
    paginate,
  };
}
