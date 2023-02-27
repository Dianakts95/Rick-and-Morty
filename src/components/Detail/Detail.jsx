import { useState, useEffect } from "react";
import { useParams , Link } from "react-router-dom";

const Detail = () => {

    const {detailId} = useParams();

    const [character, setCharacter]=useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        <div>
            <Link to="/home">
                <button>Back</button>
            </Link>
            
            <h1>Detail</h1>
            <h1>{character?.name}</h1>
            <h2>{character?.status}</h2>
            <h2>{character?.specie}</h2>
            <h2>{character?.gender}</h2>
            <h2> {character?.origin && character?.origin.name}</h2>
            <img src={character?.image} alt={character.name} /> 
        </div>
    )
    
}

export default Detail;
