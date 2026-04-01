import { readDb } from "./readdb.js";

async function read() {
  const dados = await readDb()
  
  const resultList = dados.slice(1)

  console.log(resultList)

  return resultList
  
  
}



export { read };
