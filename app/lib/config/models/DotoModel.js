const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    dsccription: {
      type: String,
      required: true,
    },
    isComplit: {
      type: Boolean,
      default: false,
    },
  },
  { timeStamps: true }
);

const TodoModel = mongoose.models.todo || mongoose.model("todo", Schema);

export default TodoModel;
