const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  dateCreated: { type: Schema.Types.Date, default: Date.now },
  complete: { type: Boolean, default: false },
  dateCompleted: { type: Schema.Types.Date },
});

// Export model
module.exports = mongoose.model("Todo", TodoSchema);

const Todo = require("./models/Todo"); // 假设你的模型路径正确

// update Todo
async function updateTodo(todoId, updatedFields) {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(todoId, updatedFields, {
      new: true, //return updated todo
    });
    return updatedTodo;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
}

// delete Todo
async function deleteTodo(todoId) {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(todoId);
    return deletedTodo;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
}

// 
const todoIdToUpdate = "todo_id_here";
const updatedFields = { title: "Updated Title", description: "Updated Description" };

updateTodo(todoIdToUpdate, updatedFields)
  .then(updatedTodo => console.log("Updated Todo:", updatedTodo))
  .catch(error => console.error("Error:", error));

const todoIdToDelete = "todo_id_here";

deleteTodo(todoIdToDelete)
  .then(deletedTodo => console.log("Deleted Todo:", deletedTodo))
  .catch(error => console.error("Error:", error));
