import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommnetBox from "../CommnetBox/commnetBox";
import { fetchCommnets } from "../../state/actions";
import CircularProgress from "@mui/material/CircularProgress";

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blogList = useSelector((state) => (state ? state.blogs : null));
  const commentList = useSelector((state) => (state ? state.comments : null));
  const selectedBlog = blogList.filter((ele) => ele.id == id);
  const [showComments, setshowComments] = useState(false);

  useEffect(() => {
    document.title = `${selectedBlog[0].title}`;
  }, [selectedBlog]);

  useEffect(() => {
    dispatch(fetchCommnets(id));
  }, []);

  return (
    <Box
      sx={{
        maxWidth: "500px",
        height: "100vh",
        backgroundColor: "coral",
        padding: "20px",
      }}
    >
      <h2>{`Blog Title : ${selectedBlog[0].title}`}</h2>
      <h4>Blog Description :</h4>
      <div>{selectedBlog[0].body}</div>

      <Button
        onClick={() => {
          setshowComments(true);
        }}
        sx={{ marginTop: "20px" }}
        variant="contained"
      >
        Load Comments
      </Button>
      {commentList &&
        showComments &&
        commentList.map((c, ind) => {
          return (
            <div key={c.id}>
              <CommnetBox name={c.name} email={c.email} body={c.body} />
            </div>
          );
        })}
    </Box>
  );
};

export default BlogDetail;
