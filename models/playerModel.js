import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  first_name: {type: String, required: true, maxLength: 100},
  last_name: {type: String, required: true, maxLength: 100},
  email: {type: String, required: true, maxLength: 100},
  phone: {type: Number},
  iscoach: {type: Boolean, default: false},
  team: {type: String},
  speed: {type: Number, enum:[1,2,3]},
  endurance: {type: Number, enum:[1,2,3]},
  ability: {type: Number, enum:[1,2,3]},
  techniques: {type: Number, enum:[1,2,3]},
  tactical: {type: Number, enum:[1,2,3]},
  created_date: {type: Date, default: Date.now}
});

PlayerSchema
  .virtual('full_name')
  .get(function() {
    return this.first_name + ' ' + this.last_name;
  })

export default PlayerSchema;