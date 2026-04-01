import fs from "fs";

function read() {
  console.log("Reading file...");
  const conteudo = fs.readFileSync("src/db.csv", "utf-8"); 
  const linhas = conteudo.split("\n");
  
  const dados = []

  linhas.forEach((linha) => {
    const colunas = linha.split(";") 
    dados.push({
      id: colunas[0],
      name: colunas[1],
      category: colunas[2],
      quantity_piece: colunas[3],
      price: colunas[4]
    })
  }); 
  
 

  return dados;
 
}

export { read };

// [
//   {
//     id: "1",
//     name: "violão",
//     category: "cordas",
//     quantify_peace: "10",
//     price: "500.00"
//   },
//   {
//     id: "2",
//     name: "violão",
//     category: "cordas",
//     quantify_peace: "10",
//     price: "500.00"
//   },
//   {
//     id: "1",
//     name: "violão",
//     category: "cordas",
//     quantify_peace: "10",
//     price: "500.00"
//   }
// ]