// Chave da API (v3 auth) : a3c73d8179aad825fb8cd565def46209
// Base da API : https://api.themoviedb.org/3/
// Exemplo de Requisição de API : https://api.themoviedb.org/3/movie/550?api_key=a3c73d8179aad825fb8cd565def46209
// Exemplo de Requisição de API em pt-br : https://api.themoviedb.org/3/movie/550?api_key=a3c73d8179aad825fb8cd565def46209&language=pt-br
// Exemplo de Requisição dos filmes em cartaz : https://api.themoviedb.org/3/movie/now_playing?api_key=a3c73d8179aad825fb8cd565def46209&language=pt-br


// para intalar o axios (lib usada para acessar as APIs, substitui o comando fetch) : npm install axios\

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;