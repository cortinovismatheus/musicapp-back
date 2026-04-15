import fs from "fs"

async function readDb() {
    console.log("Reading file...");
    const conteudo = fs.readFileSync("src/database/db.csv", "utf-8"); 
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

export{readDb}