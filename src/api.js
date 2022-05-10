const API = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getCountry(country) {
    return fetch(`${API}/${country}`, headers)
        .then((response) => response.json())
}

export default {
    getCountry
}