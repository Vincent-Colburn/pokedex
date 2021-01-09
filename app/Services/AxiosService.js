export const pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"
})

export const sandboxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/vincentgirard/pokemon"
})
