import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'

export default function List(){
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const history = useHistory();
    const status = new URLSearchParams(location.search).get('status') ?? 'all';
    const handleStatusChange = (e) => {
        history.push(`/?status=${e.target.value}`);
    }

    useEffect(() => {
        const getCharacters = async () => {
            setLoading(true);

            const statusParam = new URLSearchParams(location.search).get('status');

            const url = 
            statusParam === 'all' || !statusParam
                ? 'https://rickandmortyapi.com/api/character'
                : `https://rickandmortyapi.com/api/character?status=${statusParam}`;

                const res = await fetch(url)
                const { results } = await res.json();
                setCharacters(results);
                setLoading(false);
        };
        getCharacters();
        }, [location.search]); 

        return (
            <>
            <h1>List of Characters</h1>
            {loading ? (
                <p>Loading..</p>
            ) : (
                <section>
                    <label htmlFor='status'>Character Status:</label>
                    <select id='status' value={status} onChange={handleStatusChange}>
                        <option value='all'>All</option>
                        <option value='dead'>Dead</option>
                        <option value='alive'>Alive</option>
                        <option value='unknown'>Unknown</option>
                    </select>
                    {characters.map((character) => (
                        <article key={character.id}>
                            <Link to={`/character/${character.id}`}>
                                <h4>{character.name}</h4>
                            </Link>
                            <p>{character.species}</p>
                            <p>Status: {character.status}</p>
                        </article>
                    ))}
                </section>
        )}
        </>
    );

}


