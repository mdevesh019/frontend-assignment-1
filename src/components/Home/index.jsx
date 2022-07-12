import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogList from "../BlogList/blogList";
import { fetchBlogs } from "../../state/actions";
import CircularProgress from "@mui/material/CircularProgress";
import SearchBlog from "../SearchBlog";

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => (state ? state.loading : null));

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box sx={{ maxWidth: "70%" }}>
          <SearchBlog />
          <h3>Blog List</h3>
          <BlogList />
        </Box>
      )}
    </>
  );
};

export default Home;
