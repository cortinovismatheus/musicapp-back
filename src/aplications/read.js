import { readDb } from "../database/readdb.js";

async function read(filters) {
  const dados = await readDb()

  const resultList = dados.slice(1)

  const filtred = resultList.filter((instrumento) => {
  
  const instrumentName = instrumento.name?.toLowerCase() || ""
  const instrumentCategory = instrumento.category?.toLowerCase() || ""

  const filterName = filters.name.toLowerCase()
  const filterCategory = filters.category.toLowerCase()

  console.log("item:", instrumentCategory)
  console.log("filtro:", filterCategory)

  const matchName = filterName === "" || instrumentName.indexOf(filterName) > -1
  const matchCategory = filterCategory === "" || instrumentCategory.indexOf(filterCategory) > -1

  return matchName && matchCategory
})

  return filtred
  
}



export { read };
