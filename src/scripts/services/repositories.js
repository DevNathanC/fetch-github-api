import { baseUrl, repositoriesQuantity } from "../variables.js"

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    if (!response.ok) {
        throw new Error('Erro ao buscar repositórios');
    }
    return await response.json()
}

export {getRepositories}