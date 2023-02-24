import styles from "./SearchBar.module.css";
import {useState} from "react";

export default function SearchBar({onSearch}) {

  const[character, setCharacter]= useState("")

  const handleChange= (event)=>{
   setCharacter(event.target.value)
   
   }

   return (
      <div className={styles.container}>
         <input 
          type="search" value={character} 
          onChange={handleChange} 
         />
         
      <button onClick = {()=> onSearch(character)}> Agregar </button>
      </div>
   );
}

// Vamos a crear este componente para luego poder agregar más personajes que deseemos ver.

// Este Componente recibe por props una función onSearch, dicha función recibe un parámetro (que más adelante será el ID del personaje tomado desde el input; pero de momento le pasamos uno cualquiera, ya que aún no estamos utilizando estados dentro del componente).

// La función onSearch se debe ejecutar cuando se haga click en el botón Agregar.