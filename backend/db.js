const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todoApp");

const todoSchma = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchma);

module.exports = {
  todo,
};
