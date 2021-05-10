const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const VideoSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'video'
    },
    duration: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    }
  },
  { minimize: false }
);

module.exports = Video = mongoose.model('videos', VideoSchema);
