import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../state/actions";

const SearchBlog = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchQuery(query));
  }, [query]);

  return (
    <>
      <Input
        sx={{
          backgroundColor: "white",
          padding: "10px",
          margin: "20px",
          width: "500px",
        }}
        placeholder={"Search Blogs..."}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        endAdornment={<SearchIcon />}
      />
    </>
  );
};

export default SearchBlog;
