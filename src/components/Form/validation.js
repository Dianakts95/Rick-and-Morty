
import {userData} from "react";

const validation = () => {
   
    let errors = {};

    // /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    // /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)) {
        errors.username = "El email es invalido";
    }
    if(!userData.username){
        errors.username = "Este campo no puede estar vacio";
    }
    if(userData.username.length > 35){
        errors.username = "El email no puede superar los 35 caracteres";
    }
    if(!userData.password.match(/\d/)){
        errors.password = "La contrase;a debe contener al menos un numero";
    }
    if(userData.password.length < 6 && userData.password.length > 10) {
        errors.password = "La contrase;a debe tener entre 6 y 10 caracteres"
    }

    return errors;
};

export default validation;