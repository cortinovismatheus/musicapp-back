import fs from "fs";
import { readDb } from "./readdb.js";

async function create(data) {
  console.log(data);

  if(data.name === undefined){
    throw new Error("Name é obrigatório. Por favor, forneça um nome para o novo item.");
  }

  if(data.category === undefined){
    throw new Error("Category é obrigatório. Por favor, forneça uma categoria para o novo item.");
  }

  if(data.quantity_piece === undefined){
    throw new Error("Quantity_piece é obrigatório. Por favor, forneça a quantidade de peças para o novo item.");
  }

  if(data.price === undefined){
    throw new Error("Price é obrigatório. Por favor, forneça um preço para o novo item.");
  }

  const dados = await readDb();

  const id = dados.length + 1;

  const novoItem = { 
    id: id,
    name: data.name,
    category: data.category,
    quantity_piece: data.quantity_piece,
    price: data.price
  };

  const idExistente = dados.some((item) => item.id === novoItem.id);

  if (idExistente) {
    throw new Error("ID já existe. Escolha um ID diferente.");
  }
  
  dados.push(novoItem);

  const conteudo = dados.map((item) => {
    return `${item.id};${item.name};${item.category};${item.quantity_piece};${item.price}`;
  });
  
  fs.writeFileSync("src/db.csv", conteudo.join("\n")); 
}

export { create };