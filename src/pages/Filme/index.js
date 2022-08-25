import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './filme-info.css';
// npm install react-toastify
import { toast } from 'react-toastify'


function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'a3c73d8179aad825fb8cd565def46209',
                    language: 'pt-BR',
                }
            })
            // se sucesso
            .then((response) => {
                setFilme(response.data);
                setLoading(false);
            })
            // não sucesso
            .catch(() => {
                navigate('/' , { replace: true});
                return;
            })
        }

        loadFilme();

        return () => {
            console.log('Desmontado');
        }
    }, [navigate, id])

    function salvarFilme() {
        const minhaLista = localStorage.getItem("@primeflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id);

        if (hasFilme) {
            toast.warning("Esse filme já está na lista");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso");


    }

    if (loading) {
        return (
            <div className = 'filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return(
        <div className = 'filme-info'>
            <h1>{filme.title}</h1>
            <img src = {`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt = {filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;


