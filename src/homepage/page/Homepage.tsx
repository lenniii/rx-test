import React, { useEffect } from "react";
import { usePosts } from "../hooks";

const Homepage = () => {
  const { getPosts } = usePosts();
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return <div>Homepage</div>;
};

export default Homepage;
