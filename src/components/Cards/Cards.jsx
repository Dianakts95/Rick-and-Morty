import Card from '../Card/Card';
import styles from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   
   return (
   <div className={styles.DivCards}>
      {
characters.map(({id, name, species, gender, image})=>{
    return <Card
    key = {id}
    name = {name} 
    species= {species}  
    gender= {gender}  
    image= {image} 
    onClose={() => onClose(id)}
    />

     })
      } 
   </div>
)}
// Nos va a servir para renderizar varios componentes Card.

// Básicamente, va a recibir un arreglo de personajes (con todos sus datos), y va a utilizar un componente Card (reutilizando el mismo que ya hicimos en el punto anterior) por cada uno de ellos, pasándole las props correspondientes.

// Tip: Usar el método map y devolver un componente Card por cada elemento del arreglo.