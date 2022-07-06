import React, { useState, useEffect } from 'react';

export function Game () {
    var min= 0;
    var max= 100;
    const initialState= Math.floor(Math.random() * max - min + 1) + min;
    const [ input, setInput ]= useState({search: ''});
    const [ intentos, setIntentos ]= useState(1);
    const [ aleatorio, setAleatorio ]= useState(initialState);

    const onSubmit = () => {
    var numero= parseInt(input.search);
    if(numero >= min && numero <= max) {
        if(intentos <= 5){
            setIntentos(intentos +1);
            if(numero > aleatorio){
                alert("Prueba con un número menor, intento nro: " +intentos);
                return
            }
            if(numero < aleatorio){
                alert("Prueba con un número mayor, intento nro: " +intentos);
                return
            }
            if(numero === aleatorio){
                alert("Felicidades, acertaste!!");
                return
            } 
        }
        alert("Haz alcanzado el máximo de intentos permitidos, reinicia el juego y vuelve a intentarlo");
         return
    }
        alert("El número ingresado debe ser un valor entre 0 y 100");
        return
    };
    

    const onChange = ({target}) => {
        setInput({
            ...input,
            [target.name]: target.value
        });
    };

    const onRestart = () => {
        setIntentos(0);
        setAleatorio(initialState);
        setInput({
            search: ''
        });
    };

    useEffect(() => {
        //descomentar los console.log en caso de hacer un seguimiento por consola de el numero aleatorio y el contador de intentos.
        //console.log(aleatorio)
        //console.log(intentos)    
    });


    return (
        
    <div>
            <input  type="number"
                    name="search"
                    value={input.search}
                    className="input"
                    placeholder="ingrese un valor..."
                    onChange={onChange}/>

            <button onClick={onSubmit} className="boton1">Adivinar</button>

            <button onClick={onRestart} className="boton2">Reiniciar Juego</button>

    </div>
    )
};