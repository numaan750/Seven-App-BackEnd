const BlogModels = require("../models/blogmodels");


const getblogmodels = async (req, res) =>{
    try{
        const blogmodels = await BlogModels.find({}); 
        res.status(200).json(blogmodels);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

const createblogmodels = async (req, res) =>{ 
    try{
        const newblog = await BlogModels.create(req.body);
        res.status(201).json(newblog);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

const updateblogmodels = async (req, res) =>{
    try{
        const updatedblog = await BlogModels.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
        res.status(200).json(updatedblog);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

const deleteblogmodels = async (req, res) =>{ 
    try{
        const deletedblog = await BlogModels.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(deletedblog);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getblogmodels,
    createblogmodels,
    updateblogmodels,
    deleteblogmodels
}