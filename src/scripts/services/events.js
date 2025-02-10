import { baseUrl, eventsQuantity } from "../variables.js";

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantity}`)
    if (!response.ok) {
        throw new Error('Erro ao buscar eventos');
    }
    return await response.json()
}


export {getEvents}