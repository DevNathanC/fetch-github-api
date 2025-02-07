import { baseUrl, repositoriesQuantity } from "../variables.js"

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?${repositoriesQuantity}`)
    return await response.json()
}

export {getRepositories}