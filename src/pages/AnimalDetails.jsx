import * as React from 'react';
import {useParams} from 'react-router-dom';
import {Context} from '../Providers/Context';

function AnimalDetails() {
    const {animals} = React.useContext(Context);
    const {animal_name} = useParams();

    const animal = animals.find(animal => animal.name === animal_name);

    return (
        <>
            <main className='center'>
                <section className='card'>
                    <h1>{animal.name}</h1>
                    <img src={animal.image_link} width='200' height='200' alt={animal.name} />
                    <p>Nome em Latim: <i>{animal.latin_name}</i></p>
                    <p>Habitat Natural: <i>{animal.habitat}</i></p>
                    <p>Dieta: {animal.diet}</p>
                    <p>Localização: {animal.geo_range}</p>
                </section>
            </main>
        </>
    );
}

export default AnimalDetails;