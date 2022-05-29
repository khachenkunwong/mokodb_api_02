const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    user_id: ObjectId,
    mail: String,
    name: String,
    age: Number
  });

const User = mongoose.model('User', UserSchema);
module.exports = User;