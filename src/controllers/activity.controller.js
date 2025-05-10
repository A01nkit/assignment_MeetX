import {Activity} from '../models/Activity.model.js'

export const listActivities = async (req, res) => {
    const activities = await Activity.find();
    res.send(activities);
};
  