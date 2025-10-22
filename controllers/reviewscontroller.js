const ReviewsModels = require("../models/reviewsmodels");


const getreviewsmodels = async (req, res) => {
  try {
    const allReviews = await ReviewsModels.find();
    res.status(200).json(allReviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getreviewbyid = async (req, res) => {
  try {
    const review = await ReviewsModels.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createreviewsmodels = async (req, res) => {
  try {
    console.log("Incoming review data:", req.body); 

    const newReview = new ReviewsModels(req.body);
    const savedReview = await newReview.save();

    res.status(201).json({
      message: "Review created successfully",
      savedReview,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create review",
      error: error.message,
    });
  }
};

const updatereviewsmodels = async (req, res) => {
  try {
    // Step 1: Find the existing review
    const existing = await ReviewsModels.findById(req.params.id);
    if (!existing) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Step 2: Merge existing data with new data
    // So that missing fields aren’t replaced by undefined or empty strings
    const updatedData = { ...existing._doc, ...req.body };

    // Step 3: Update safely
    const updatedreviews = await ReviewsModels.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true, runValidators: true }
    );

    // Step 4: Return success
    res.status(200).json({
      message: "Review updated successfully",
      updatedreviews,
    });

  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({
      message: "Failed to update review",
      error: error.message,
    });
  }
};


const deletereviewsmodels = async (req, res) => {
  try {
    const deletedreviews = await ReviewsModels.findByIdAndDelete(req.params.id);
    if (!deletedreviews) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({
      message: "Review deleted successfully",
      deletedreviews,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getreviewsmodels,
  getreviewbyid,
  createreviewsmodels,
  updatereviewsmodels,
  deletereviewsmodels,
};
