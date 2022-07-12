import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BlogCard } from "../BlogCard";

const BlogList = () => {
  const blogList = useSelector((state) => (state ? state.blogs : null));
  const [filterList, setFilterList] = useState(blogList);
  let searchQuery = useSelector((state) => (state ? state.searchQuery : ""));

  useEffect(() => {
    let f_list = blogList?.filter((ele) => ele.title.includes(searchQuery));
    setFilterList(f_list);
  }, [searchQuery]);

  return (
    <>
      <Grid container spacing={2}>
        {filterList &&
          filterList.map((blog, ind) => {
            return (
              <Grid key={blog.id} item sx={4}>
                <BlogCard id={blog.id} title={blog.title} body={blog.body} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default BlogList;
