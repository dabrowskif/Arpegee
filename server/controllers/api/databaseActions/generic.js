import mongoose from 'mongoose';

export const isIdValid = (id) => mongoose.Types.ObjectId.isValid(id);
