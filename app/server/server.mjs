import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const db = [];

app.post("/todo", (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
  };

  db.push(newTodo);
  res.json(newTodo);
});

app.get("/todo", (req, res) => {
  res.json(db);
});

app.get("/todo/:id", (req, res) => {
  const todo = db.find((todo) => {
    return todo.id === +req.params.id;
  });

  res.json({
    data: todo,
  });
});

app.listen(process.env.PORT, () => {
  console.log("server is listening");
});
