import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    activity: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }
  });


export const Booking = mongoose.model('Booking', bookingSchema);
