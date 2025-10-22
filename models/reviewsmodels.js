const mongoose = require("mongoose");

const reviewsmodelsSchema = new mongoose.Schema({
  mainheading: { type: String, required: true },

  userimg1: { type: String, required: true },
  username1: { type: String, required: true },
  usertitle1: { type: String, required: true },
  cardheading1: { type: String, required: true },
  carddescription1: { type: String, required: true },

  userimg2: { type: String, required: true },
  username2: { type: String, required: true },
  usertitle2: { type: String, required: true },
  cardheading2: { type: String, required: true },
  carddescription2: { type: String, required: true },

  userimg3: { type: String, required: true },
  username3: { type: String, required: true },
  usertitle3: { type: String, required: true },
  cardheading3: { type: String, required: true },
  carddescription3: { type: String, required: true },

  userimg4: { type: String, required: true },
  username4: { type: String, required: true },
  usertitle4: { type: String, required: true },
  cardheading4: { type: String, required: true },
  carddescription4: { type: String, required: true },

  userimg5: { type: String, required: true },
  username5: { type: String, required: true },
  usertitle5: { type: String, required: true },
  cardheading5: { type: String, required: true },
  carddescription5: { type: String, required: true },

  userimg6: { type: String, required: true },
  username6: { type: String, required: true },
  usertitle6: { type: String, required: true },
  cardheading6: { type: String, required: true },
  carddescription6: { type: String, required: true },

  userimg7: { type: String, required: true },
  username7: { type: String, required: true },
  usertitle7: { type: String, required: true },
  cardheading7: { type: String, required: true },
  carddescription7: { type: String, required: true },

  userimg8: { type: String, required: true },
  username8: { type: String, required: true },
  usertitle8: { type: String, required: true },
  cardheading8: { type: String, required: true },
  carddescription8: { type: String, required: true },
});

module.exports = mongoose.model("reviewamodels", reviewsmodelsSchema);
