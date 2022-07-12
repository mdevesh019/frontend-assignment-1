import { Card, CardContent, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const BlogCard = ({ id, title, body }) => {
  const navigate = useNavigate();
  return (
    <>
      <Paper
        onClick={() => {
          navigate(`/blog/${id}`);
        }}
        sx={{ maxWidth: "300px", cursor: "pointer" }}
        elevation={2}
      >
        <Typography sx={{ fontWeight: "600" }}>{title}</Typography>
        <Typography>{body}</Typography>
      </Paper>
    </>
  );
};
