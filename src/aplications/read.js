import { readDb } from "../database/readdb.js";

async function read(filters) {
  console.log(filters)

  const dados = await readDb()

  const resultList = dados.slice(1)

  const filtred = resultList.filter((instrumento) => {

    const instrumentName = instrumento.name?.toLowerCase() || ""
    const instrumentCategory = instrumento.category?.toLowerCase() || ""

    const filterName = filters.name.toLowerCase()
    const filterCategory = filters.category.toLowerCase()

    const matchName = filterName === "" || instrumentName.indexOf(filterName) > -1
    const matchCategory = filterCategory === "" || instrumentCategory.indexOf(filterCategory) > -1

    return matchName && matchCategory
  })


  const start = (filters.page - 1) * filters.limit
  const end = start + filters.limit

  const paginated = filtred.slice(start, end)

  return{
    data: paginated,
    total: filtred.length,
    page: filters.page,
    limit: filters.limit,
    totalPages: Math.ceil(filtred.length / filters.limit)
  }


}



export { read };
