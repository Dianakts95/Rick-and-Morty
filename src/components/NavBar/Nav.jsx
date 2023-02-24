import SearchBar from "../SearchBar/SearchBar.jsx";

const Nav = ({onSearch}) => {
    return(
        <nav>
            <SearchBar onSearch={onSearch}/>
            
        </nav>
    )
}

    //  function Nav (props) {
 
    // return (
    //    <div >
    //     <SearchBar onSearch={props.onSearch}/>
    //    </div>
    // );}
 


export default Nav;