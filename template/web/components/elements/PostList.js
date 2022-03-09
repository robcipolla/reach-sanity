import React from "react";
import Link from "next/link";
import usePagination from "../../lib/hooks/usePagination";
import Pagination from "./Pagination";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card";

/**
 * Post list container
 *
 * @return {JSX.Element} JSX Code for the post list
 */
export default function PostList({ posts }) {
  const { pageNumbers, currentPosts, paginate, currentPage } = usePagination(posts);
  return (
    <>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-none">
        {currentPosts.map((post) => (
          <Card title={post.title} link={post.slug.current} image={post.mainImage.asset} />
        ))}
      </div>

      <Pagination
        pageNumbers={pageNumbers}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}
