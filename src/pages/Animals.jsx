import * as React from 'react';

function Animals() {
    const [animal, setAnimal] = React.useState({});

    const getAnimal = async () => {
      const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand");
      return await response.json();
    }

    const updateAnimal = () => getAnimal().then(setAnimal);

    React.useEffect(() => {
      updateAnimal();
    }, []);

    return (
        <>
          <h1>{animal.name}</h1>
          <img src={animal.image_link} width='200' height='200' alt={animal.name} />
          <p>Nome em Latim: <i>{animal.latin_name}</i></p>
          <p>Habitat Natural: <i>{animal.habitat}</i></p>
          <p>Dieta: {animal.diet}</p>
          <button onClick={updateAnimal}>Gerar animal</button>
        </>
    )
}

export default Animals;