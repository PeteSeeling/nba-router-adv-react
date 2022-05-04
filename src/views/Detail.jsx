import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Detail() {
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const getCharacter = async () => {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/${id}`
            );
            const characterData = await res.json();
            setCharacter(characterData);
            setLoading(false);
        };
        getCharacter();
    },[]);

    return(
        <>
        <h1>Details</h1>
        <Link to='/'>To List Page</Link>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <article>
                <h2>{character.name}</h2>
                <p>{character.species}</p>
                <p>Status: {character.status}</p>
                <img alt={`Pic of ${character.name}`} src={character.image} />
            </article>
        )}
        </>
    );
}