import express from "express";

const tasks = express.Router();

tasks.post("/", (req, res) => {
  // Logic to create a new task
  // Access data from req.body
  // Save to database
  res.status(201).json({ message: "Task is created" });
});

tasks.get("/:id", (req, res) => {
  const taskId = req.params.id;
  // Logic to fetch task data from database
  // Send task data as response
  res.status(200).json({ id: taskId, name: "John Doe" });
});

tasks.get("/", (req, res) => {
  const tasks = [{
    id: 1,
    name: "John Doe",
  }, {
    id: 2,
    name: "Sam Smith",
  }];

  // Logic to fetch task data from database
  // Send task data as response
  res.status(200).json(tasks);
});

tasks.put("/:id", (req, res) => {
  const taskId = req.params.id;
  // Logic to update a task
  // Access data from req.body
  // Update task in database
  res.status(200).json({ message: `Task ${taskId} has been updated` });
});

tasks.delete("/:id", (req, res) => {
  const taskId = req.params.id;
  // Logic to delete a task
  // Delete task from database
  res.status(200).json({ message: `Task ${taskId} has been deleted` });
});

export default tasks;
