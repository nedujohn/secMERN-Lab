import mongoose  from "mongoose";

const BlogSchema = new mongoose.Schema({
    title : String,
    content : String,
    response  : String
}, { timestamps : true}
);

const BlogModel = mongoose.model("Blog", BlogSchema);

export default BlogModel