import mongoose from 'mongoose'

const activitySchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    datetime: Date
  });


export const Activity = mongoose.model('Activity', activitySchema);
