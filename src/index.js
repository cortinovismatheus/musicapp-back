import { read } from "./read.js";
import { remove } from "./remove-item.js";
import { create } from "./create.js";
import { update } from "./update.js";

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

const fun = () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}

app.get("/", async(req, res) => {
  const arrReasponse = await read();
  res.json(arrReasponse);
})

app.post("/", (req, res) => {
  
  try{
    create(req.body);
    res.status(201).json({message: "Item criado com sucesso",});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
})

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  remove(id);
  res.json({ message: "Item removido com sucesso"});
});

app.put("/:id", (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  update(id, updatedData);
  res.json({ message: "Item atualizado com sucesso"});
});


app.listen(PORT, fun)