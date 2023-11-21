const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Todo = require("../models/Todo");
const privateKey = ``;

router.use(function (req, res, next) {
  // console.log("In Todo router");
  if (req.header("Authorization")) {
    try {
      req.payload = jwt.verify(req.header("Authorization"), privateKey, {
        algorithms: ["RS256"],
      });
      next();
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  } else {
    return res.status(401).json({ error: "Authorization header missing." });
  }
});

router.put("/:id", async function (req, res) {
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        {
          title: req.body.title,
          description: req.body.description,
          dateCreated: req.body.dateCreated,
          dateCompleted: req.body.dateCompleted,
          complete: req.body.complete,
        },
        { new: true } // Return the updated todo
      ).where("author").equals(req.payload.id);
  
      if (updatedTodo) {
        return res.status(200).json({
          id: updatedTodo._id,
          title: updatedTodo.title,
          description: updatedTodo.description,
          dateCompleted: updatedTodo.dateCompleted,
          dateCreated: updatedTodo.dateCreated,
          complete: updatedTodo.complete,
        });
      } else {
        return res.status(404).json({ error: "Todo not found." });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  

router.post("/", async function (req, res) {
  //console.log("In POST /post handler", JSON.stringify(req));
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    author: req.payload.id,
    dateCreated:req.body.dateCreated,
    dateCompleted:req.body.dateCompleted,
    complete: req.body.complete
  });
  todo
    .save()
    .then((savedTodo) => {
      return res.status(201).json({
        id: savedTodo._id,
        title: savedTodo.title,
        description: savedTodo.description,
        author: savedTodo.author,
        dateCreated: savedTodo.dateCreated,
        dateCompleted:savedTodo.dateCompleted,
        complete : savedTodo.complete
      });
    })
    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });
});

router.get("/", async function (req, res) {
  //console.log("In GET /post handler");
  Todo.find()
    .where("author")
    .equals(req.payload.id)
    .then((todos) => {
      return res.status(200).json(todos);
    })
    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });
});


router.delete("/:id", async function (req, res) {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id)
      .where("author")
      .equals(req.payload.id);

    if (deletedTodo) {
      return res.status(200).json({
        id: deletedTodo._id,
        title: deletedTodo.title,
        description: deletedTodo.description,
        dateCompleted:deletedTodo.dateCompleted,
        dateCreated: deletedTodo.dateCreated,
        complete: deletedTodo.complete
        
      });
    } else {
      return res.status(404).json({ error: "Todo not found." });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


module.exports = router;