const { db } = require("../utility/admin");

exports.postSingleTodo = (req, res) => {
  if (req.body.course.trim() === "") {
    return res.status(400).json({ map: " must not be empty" });
  }

  const newTodo = {
    record: req.body.record,
    course: req.body.course,
    zone: req.body.zone,
    server: req.body.server,
    createdAt: new Date().toISOString(),
    userHandle: req.user.handle,
  };

  db.collection("todos")
    .add(newTodo)
    .then((doc) => {
      const resTodo = newTodo;
      resTodo.TodoId = doc.id;
      res.json(resTodo);
    })
    .catch((err) => {
      res.status(500).json({ error: `something went wrong` });
      console.error(err);
    });
};
