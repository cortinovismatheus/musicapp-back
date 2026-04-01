import fs from "fs";
import { readDb } from "./readdb.js";

async function remove(id){
  const idToDelete = String(id);
  const dados = await readDb();

  const idExistente = dados.some((item) => item.id === idToDelete);

  if(!idExistente){
    throw new Error("ID não encontrado. Por favor, escolha um ID existente para atualizar.");
  }

  const novosDados = dados.filter((item) => item.id !== idToDelete);
   
  const linhas = novosDados.map((item) => {
    return `${item.id};${item.name};${item.category};${item.quantity_piece};${item.price}`; 
  });

  const conteudo = linhas.join("\n");

  
  fs.writeFileSync("src/db.csv", conteudo); 
}

export {remove};