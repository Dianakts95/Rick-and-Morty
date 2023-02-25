import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "../NavBar/Nav.module.css"


const Nav = ({onSearch}) => {
    return(
        <div >
            <NavLink  to="/about">
                <button className={styles.button} >About</button>
            </NavLink>
            <NavLink to="/home">
                <button className={styles.button}>Home</button>
            </NavLink>
            <SearchBar onSearch={onSearch}/>
            
        </div>
    )
}

    //  function Nav (props) {
 
    // return (
    //    <div >
    //     <SearchBar onSearch={props.onSearch}/>
    //    </div>
    // );}
 


export default Nav;