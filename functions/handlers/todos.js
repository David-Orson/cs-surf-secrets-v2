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

exports.getUserTodos = (req, res) => {
  let userData = {};
  db.doc(`/users/${req.params.handle}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData.user = doc.data();
        return db
          .collection("todos")
          .where("userHandle", "==", req.params.handle)
          .orderBy("createdAt", "desc")
          .get();
      } else {
        return res.status(404).json({ error: "User not found" });
      }
    })
    .then((data) => {
      userData.todos = [];
      data.forEach((doc) => {
        userData.todos.push({
          record: doc.data().record,
          course: doc.data().course,
          zone: doc.data().zone,
          server: doc.data().server,
          createdAt: doc.data().createdAt,
          userHandle: doc.data().userHandle,
        });
      });
      return res.json(userData);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};
