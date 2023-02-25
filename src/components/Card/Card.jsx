import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({name, species, gender, image, onClose, id}) {
   return (
      <div className={styles.container} >
         <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}> 
         <h2>{name}</h2>
         </ Link>  
         
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt={name} />
      </div>
   );
}


// Esta tarjeta va a mostrar el nombre de un personaje, su especie, género e imagen.

// Además cuando el usuario haga click en la X de "cerrar", se invocará una función que también viene como props.

// Este componente Card va a recibir las siguientes props:

// name: Nombre
// species: Especie
// gender: Género
// image: Imagen
// onClose: La función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.

