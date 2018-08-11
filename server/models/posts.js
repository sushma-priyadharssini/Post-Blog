const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create posts Schema & model
const PostSchema = new Schema({
  body: {
    type: String
  },
  title: {
    type: String
  },
  userId: {
    type: Number
  },
  blogId: {
    type: Number
  }
});

const Posts = mongoose.model('posts', PostSchema);
module.exports = Posts;
