import * as React from 'react';

function Galery() {
    const [animals, setAnimals] = React.useState([]);

    const getAnimals = async () => {
        const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/8");
        return await response.json();
    }

    React.useEffect(() => {
        getAnimals().then(setAnimals);
    }, []);

    return (
        <>
            { animals.length ? 
                animals.map((animal, key) => (
                    <>
                        <h1 key={key}>{animal.name}</h1>
                        <img src={animal.image_link} width='200' height='200' alt={animal.name} />
                        <p>Nome em Latim: <i>{animal.latin_name}</i></p>
                        <p>Habitat Natural: <i>{animal.habitat}</i></p>
                        <p>Dieta: {animal.diet}</p> 
                        <p>Localização: {animal.geo_range}</p> 
                    </>
                ))
            : <h1>Carregando...</h1> }
        </>
    );
}

export default Galery;