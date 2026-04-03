import fs from "fs";
import { readDb } from "./readdb.js";

async function remove(id){
  const idToDelete = String(id);
  const dados = await readDb();

  const idExistente = dados.some((item) => Number(item.id) === Number(idToDelete));

  if(!idExistente){
    throw new Error("ID não encontrado. Por favor, escolha um ID existente para atualizar.");
  }

  const novosDados = dados.filter((item) => Number(item.id) !== Number(idToDelete));
   
  const linhas = novosDados.map((item) => {
    return `${item.id};${item.name};${item.category};${item.quantity_piece};${item.price}`; 
  });

  const conteudo = linhas.join("\n");

  
  fs.writeFileSync("src/db.csv", conteudo); 
}

export {remove};