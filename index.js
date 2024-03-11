import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("vue_app/dist"));
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

app.get("/api/secret/:id", (req, res) => {
  const id = `${req.params.id}`.toLowerCase();
  switch (id) {
    case "polly":
      res.send({ data: "Hi, Polly, I love you!!!" });
    case "jeffrey":
      res.send({ data: "It works!" });
    default:
      res.status(404).send({ error: "Does not exist" });
  }
});
