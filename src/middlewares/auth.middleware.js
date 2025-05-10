import jwt from 'jsonwebtoken'
import {User} from '../models/User.model.js'


export const auth = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).send({ error: 'No token provided' });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      next();
    } catch {
      res.status(401).send({ error: 'Invalid token' });
    }
};

