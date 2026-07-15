import BlogModel from "../model/BlogModel.js";

export const testBlog = (req, res) => {
    res.status(200).json({
        message : "Blog Api working"
    })
}

export const createPost = async(req, res) => {
    try {
        const { title, content, response } = req.body;
        const blog = new BlogModel({
            title, content, response
        })
        await blog.save();
        res.status(201).json({
            message : "new post created ", blog
        })
    } catch (error) {
        console.log(`Error : ${error}}`)
    }
}

export const getBlogs = async (req, res) => {
    try {
        const { id } = req.body
        const blog = await BlogModel.find();

        if (!blog) {
            res.status(404).json({ message: "blog not found"})
        }
        res.status(200),json({message : blog})
    } catch (error) {
        console.log(error)
    }
}

export const searchBlog = async(req, res) => {
    try {
        const q = req.query.q;
        const blogs = await BlogModel.find({ title: q});
        if(!blogs) {
            res.status(404).json({ message : "not found"})
        }
        res.status(200).json({ message: blogs})
    } catch (error) {
        console.log (`Error: ${error}`)
    }
} 


export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await BlogModel.findByIdAndDelete({ _id})
        if (!blog) {
           res.status(404).json({ message: "not found"})
        }
        res.status(200).json({ message: `${blog._id} deleted`})
    } catch (error) {
       console.log(error)
    }
}