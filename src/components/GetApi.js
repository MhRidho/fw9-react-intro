import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetApi = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results)
    }

    return (
        <div className='container mt-5'>
            {characters.map((character, i) => (
                <div className='row'>
                    <div className="col p-2">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Img variant="top" src={character.image} alt="image" />
                                <Card.Title className='mt-3 text-center'>{character.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GetApi;