import express from "express"
import { createPost, deleteBlog, getBlogs, searchBlog } from "../controller/BlogController.js";

const BlogRouter = express.Router();

BlogRouter.get("/", getBlogs)
BlogRouter.post("/create", createPost)
BlogRouter.delete("/delete/:id", deleteBlog)
BlogRouter.get("/search", searchBlog)

export default BlogRouter