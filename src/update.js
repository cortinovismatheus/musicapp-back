import fs from "fs";
import { read } from "./read.js";

function update(id, data) {  
  const idString = String(id);
  const dados = read(); 

  const idExistente = dados.some((item) => item.id === idString);
  if(!idExistente){
    throw new Error("ID não encontrado. Por favor, escolha um ID existente para atualizar.");
  }

  const uppdateItem = dados.map((item) => {
    if(item.id === idString){
      const newInstrument = {
        id: item.id,
        name: data.name || item.name,
        category: data.category || item.category,
        quantity_piece: data.quantity_piece || item.quantity_piece,
        price: data.price || item.price
      }
      return newInstrument;
    }
    return item;
  })
  
  const conteudo = uppdateItem.map((item) => {
    return `${item.id};${item.name};${item.category};${item.quantity_piece};${item.price}`; 
  });

  fs.writeFileSync("src/db.csv", conteudo.join("\n"));
}

export { update };
